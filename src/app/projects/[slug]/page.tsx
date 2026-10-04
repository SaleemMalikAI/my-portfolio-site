import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Navbar } from "@/components/sections";
import { ArrowIcon } from "@/components/icons";
import { profile, projects } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} · ${profile.name}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.description, url: `/projects/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div aria-hidden="true" className="bg-grid pointer-events-none fixed inset-0 -z-10" />
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pt-14 pb-24 sm:px-6 sm:pt-20">
        <Link href="/#projects" className="font-mono text-xs text-muted transition-colors hover:text-cyan">
          ← ./projects
        </Link>

        <div className="mt-8 flex items-center gap-3 font-mono text-xs">
          <span className="text-cyan">{project.kind}</span>
          <span className="text-line">·</span>
          <span className="text-muted">{project.year}</span>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{project.name}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.description}</p>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/40 bg-cyan/10 px-4 py-2 font-mono text-xs text-cyan transition-colors hover:bg-cyan/20"
              >
                {link.label}
                <ArrowIcon />
              </a>
            ))}
          </div>
        )}

        <section className="glow-card mt-12 p-6 sm:p-8">
          <h2 className="font-mono text-xs tracking-wider text-violet uppercase">What I built</h2>
          <ul className="mt-5 space-y-3 leading-relaxed text-muted">
            {[...project.points, ...(project.details ?? [])].map((point) => (
              <li key={point} className="flex gap-3">
                <span aria-hidden="true" className="mt-[11px] size-1 shrink-0 rounded-full bg-cyan/70" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="glow-card mt-5 p-6 sm:p-8">
          <h2 className="font-mono text-xs tracking-wider text-violet uppercase">Tech stack</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-md border border-line bg-fg/[0.03] px-3 py-1.5 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <a href={`mailto:${profile.email}?subject=${encodeURIComponent(project.name)}`} className="text-sm text-muted hover:text-cyan">
            Questions about this project? <span className="text-cyan">Email me</span>
          </a>
          <Link href={`/projects/${next.slug}`} className="glow-card inline-flex items-center gap-3 px-4 py-3 text-sm">
            <span className="font-mono text-[11px] text-muted">next</span>
            <span className="font-medium">{next.name}</span>
            <ArrowIcon />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
