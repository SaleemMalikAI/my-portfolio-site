import Image from "next/image";
import {
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
} from "@/data/profile";
import {
  ArrowIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";
import { NeuralBackground } from "./neural-background";
import { ThemeToggle } from "./theme-toggle";
import { TypingPrompt } from "./typing-prompt";

const navLinks = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

function SectionHeading({ index, title, kicker }: { index: string; title: string; kicker: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-wider text-cyan">
        <span className="text-muted">{"//"} {index}</span> {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-fg/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </li>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-cyan to-violet text-[11px] font-bold text-white">
            SM
          </span>
          <span className="hidden sm:inline">
            saleem<span className="text-cyan">.</span>ai
          </span>
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <ul className="hidden gap-6 font-mono text-xs text-muted md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-cyan">
                  ./{link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-cyan/40 bg-cyan/10 px-3.5 py-2 font-mono text-xs font-medium text-cyan transition-colors hover:bg-cyan/20"
          >
            <DownloadIcon />
            resume.pdf
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <NeuralBackground />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="orb absolute -top-32 -left-24 size-[460px] rounded-full bg-violet/20 blur-[120px]" />
        <div className="orb absolute top-40 right-[-120px] size-[380px] rounded-full bg-cyan/15 blur-[120px] [animation-delay:-6s]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="pointer-events-none relative mx-auto grid max-w-6xl items-center gap-14 px-4 pt-20 pb-24 sm:px-6 sm:pt-28 lg:grid-cols-[1.25fr_1fr]">
        <div className="pointer-events-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-[11px] text-muted backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            available for work · {profile.location}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">
            <span className="text-gradient">{profile.role}</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.headline} From Next.js frontends to FastAPI services, RAG pipelines and multi-agent
            workflows, shipped end to end.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-gradient-to-r from-cyan to-violet px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_-6px_var(--violet)] transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-line bg-surface/60 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-violet/60"
            >
              View projects
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-muted transition-colors hover:bg-surface hover:text-cyan"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-muted transition-colors hover:bg-surface hover:text-cyan"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Terminal card */}
        <div className="pointer-events-auto relative">
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/50 via-violet/40 to-pink/40 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl theme-dark border border-white/10 bg-[#080a12]/95 text-fg backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-[11px] text-muted">saleem@ai — zsh</span>
            </div>
            <div className="flex items-center gap-4 border-b border-white/5 p-4">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-violet/40">
                <Image
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="font-mono text-xs leading-relaxed">
                <p>
                  <span className="text-violet">const</span> engineer = {"{"}
                </p>
                <p className="pl-4">
                  name: <span className="text-emerald-300">&quot;{profile.name}&quot;</span>,
                </p>
                <p className="pl-4">
                  experience: <span className="text-pink">&quot;2 years&quot;</span>,
                </p>
                <p>{"}"}</p>
              </div>
            </div>
            <div className="space-y-2 p-4 font-mono text-[13px] leading-relaxed">
              <p className="text-muted">
                <span className="text-emerald-400">➜</span> <span className="text-cyan">~</span> ask saleem
              </p>
              <p className="min-h-[2.8em] text-fg">
                <span className="text-violet">❯ </span>
                <TypingPrompt lines={profile.prompts} />
              </p>
              <p className="pt-2 text-[11px] text-muted">
                stack: next.js · typescript · fastapi · langchain · pinecone · crewai
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
          {[
            { k: "2 yrs", v: "building in production" },
            { k: "4", v: "engineering roles" },
            { k: "RAG · Agents", v: "LLM systems" },
            { k: "Next.js · FastAPI", v: "full stack" },
          ].map((s) => (
            <div key={s.v} className="bg-bg/90 px-5 py-5">
              <dt className="text-lg font-semibold">{s.k}</dt>
              <dd className="mt-1 font-mono text-[11px] text-muted">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="01" kicker="experience.log" title="Where I've worked" />
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-cyan before:via-violet before:to-transparent">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pl-10">
            <span
              className={`absolute top-7 left-0 size-[15px] rounded-full border-2 border-bg ${
                i === 0 ? "bg-cyan shadow-[0_0_14px_var(--cyan)]" : "bg-violet/70"
              }`}
            />
            <article className="glow-card p-6 sm:p-7">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-muted">
                    {job.company} <span className="text-line">·</span> {job.location}
                  </p>
                </div>
                <p className="shrink-0 rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-cyan">
                  {job.period}
                </p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {job.groups.map((group) => (
                  <div key={group.title}>
                    <h4 className="mb-3 font-mono text-[11px] tracking-wider text-violet uppercase">
                      {group.title}
                    </h4>
                    <ul className="space-y-2.5 text-[14.5px] leading-relaxed text-muted">
                      {group.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[9px] size-1 shrink-0 rounded-full bg-cyan/70" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="02" kicker="projects.run()" title="Selected projects" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.name} className="glow-card flex flex-col p-6">
            <div className="flex items-center justify-between gap-4 font-mono text-[11px]">
              <span className="text-cyan">{project.kind}</span>
              <span className="text-muted">{project.year}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="font-mono text-violet">›</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="mt-4 flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-cyan hover:underline"
                    >
                      {link.label}
                      <ArrowIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="03" kicker="model.config" title="Tech stack" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((row) => (
          <div key={row.group} className="glow-card p-5">
            <p className="font-mono text-xs text-violet">
              <span className="text-muted">{"{ "}</span>
              {row.group.toLowerCase()}
              <span className="text-muted">{" }"}</span>
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {row.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading index="04" kicker="training.data" title="Education & certifications" />
      <div className="grid gap-5 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5">
          {education.map((edu) => (
            <div key={edu.school} className="glow-card p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-muted">
                    {edu.school}, {edu.location}
                  </p>
                  {edu.note && <p className="mt-1 font-mono text-xs text-pink">{edu.note}</p>}
                </div>
                <p className="shrink-0 font-mono text-[11px] text-cyan">{edu.period}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {edu.courses.map((course) => (
                  <Chip key={course}>{course}</Chip>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <ul className="glow-card divide-y divide-line">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-4 px-6 py-4">
                <span className="text-sm font-medium">{cert.name}</span>
                <span className="shrink-0 font-mono text-[11px] text-muted">{cert.issuer}</span>
              </li>
            ))}
          </ul>
          <div className="glow-card p-6">
            <p className="font-mono text-xs text-violet">languages</p>
            <ul className="mt-4 space-y-2">
              {languages.map((lang) => (
                <li key={lang.name} className="flex justify-between text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="font-mono text-[11px] text-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const items = [
    { icon: <MailIcon />, label: "email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: "whatsapp", value: profile.phone, href: profile.whatsapp },
    { icon: <LinkedInIcon />, label: "linkedin", value: "in/devsaleemalik", href: profile.linkedin },
    { icon: <GitHubIcon />, label: "github", value: "SaleemMalikAI", href: profile.github },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-14">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-60" />
        <div aria-hidden="true" className="absolute -right-20 -bottom-24 -z-10 size-80 rounded-full bg-violet/25 blur-[100px]" />
        <p className="font-mono text-xs text-cyan">
          <span className="text-muted">{"//"} 05</span> contact.init()
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
          Let&apos;s build something <span className="text-gradient">intelligent</span>.
        </h2>
        <p className="mt-5 max-w-xl text-muted">
          Open to full stack and AI engineering roles. The fastest way to reach me is email.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="glow-card flex items-center gap-4 px-4 py-3.5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-fg/[0.05] text-cyan">
                  {item.icon}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] text-muted">{item.label}</span>
                  <span className="block truncate text-sm font-medium">{item.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pt-4 pb-10 sm:px-6">
      <div className="flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
