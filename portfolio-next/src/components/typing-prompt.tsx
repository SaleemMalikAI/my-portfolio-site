"use client";

import { useEffect, useState } from "react";

// Types each line, pauses, deletes it, then moves on to the next.
export function TypingPrompt({ lines }: { lines: string[] }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Show the first line without animating
      const timer = setTimeout(() => setText(lines[0]), 0);
      return () => clearTimeout(timer);
    }
    const full = lines[lineIndex];
    let delay = deleting ? 22 : 45;
    if (!deleting && text === full) delay = 1800;
    if (deleting && text === "") delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === full) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, lineIndex, lines]);

  return (
    <span>
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
