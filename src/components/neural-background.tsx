"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 170;

// Animated "neural network": drifting nodes linked when close, reacting to the cursor.
export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    // Colors come from CSS variables so the network follows the light/dark theme
    const colors = { node: "", link: "", hover: "" };
    const readColors = () => {
      const style = getComputedStyle(canvas);
      colors.node = style.getPropertyValue("--node-rgb").trim();
      colors.link = style.getPropertyValue("--link-rgb").trim();
      colors.hover = style.getPropertyValue("--hover-rgb").trim();
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(90, (width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgb(${colors.link} / ${(1 - d / LINK_DISTANCE) * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (dm < MOUSE_RADIUS) {
          ctx.strokeStyle = `rgb(${colors.hover} / ${(1 - dm / MOUSE_RADIUS) * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = dm < MOUSE_RADIUS ? `rgb(${colors.hover} / 0.95)` : `rgb(${colors.node} / 0.55)`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, dm < MOUSE_RADIUS ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      if (visible && !reduceMotion) frame = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (reduceMotion) draw();
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    // Pause the loop while the hero is scrolled out of view
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) draw();
    });

    // Re-read colors when the theme toggle or the system setting changes
    const themeObserver = new MutationObserver(() => {
      readColors();
      if (reduceMotion) draw();
    });
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    const onScheme = () => readColors();

    readColors();
    resize();
    draw();
    observer.observe(canvas);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    scheme.addEventListener("change", onScheme);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      scheme.removeEventListener("change", onScheme);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />;
}
