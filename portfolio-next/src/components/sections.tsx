import Image from "next/image";
import {
  certifications,
  education,
  experience,
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

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight sm:text-3xl">
      <span className="font-mono text-sm font-normal text-accent">{index}</span>
      {title}
    </h2>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
      {children}
    </li>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          saleem<span className="text-accent">.</span>malik
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-muted md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-85"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl"
      />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-4 pt-16 pb-20 sm:px-6 sm:pt-24 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="size-2 rounded-full bg-emerald-500" />
            {profile.role} · {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block text-muted">{profile.headline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-fg/40"
            >
              View work
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2.5 text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2.5 text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="relative mx-auto size-56 shrink-0 overflow-hidden rounded-3xl border border-line bg-surface sm:size-72 md:mx-0">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 640px) 288px, 224px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="01" title="Experience" />
      <ol className="space-y-12 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute top-2 -left-[29px] size-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[37px]" />
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-muted">{job.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted">{job.location}</p>
            <div className="mt-5 space-y-5">
              {job.groups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-2 text-xs font-medium tracking-wider text-accent uppercase">
                    {group.title}
                  </h4>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-muted">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-muted/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="02" title="Selected projects" />
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={project.name}
            className={`group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/50 ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
              <span>{project.kind}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              {project.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">→</span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="flex gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
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

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="03" title="Skills" />
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((row) => (
          <div key={row.group} className="grid gap-3 py-5 sm:grid-cols-[160px_1fr]">
            <dt className="text-sm font-medium">{row.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <SectionHeading index="04" title="Education & certifications" />
      <div className="grid gap-5 md:grid-cols-[3fr_2fr]">
        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="font-mono text-xs text-muted">{education.period}</p>
          <h3 className="mt-3 text-lg font-semibold">{education.degree}</h3>
          <p className="text-muted">
            {education.school}, {education.location}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {education.courses.map((course) => (
              <Chip key={course}>{course}</Chip>
            ))}
          </ul>
        </div>
        <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-baseline justify-between gap-4 px-6 py-4">
              <span className="text-sm font-medium">{cert.name}</span>
              <span className="shrink-0 font-mono text-xs text-muted">{cert.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactSection() {
  const items = [
    { icon: <MailIcon />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <PhoneIcon />, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
    { icon: <LinkedInIcon />, label: "LinkedIn", value: "in/devsaleemalik", href: profile.linkedin },
    { icon: <GitHubIcon />, label: "GitHub", value: "SaleemMalik632", href: profile.github },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <p className="font-mono text-sm text-accent">05 · Contact</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Have a role or a project in mind? Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          I&apos;m open to full stack and AI engineering roles. The fastest way to reach me is email.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-line px-4 py-3.5 transition-colors hover:border-accent/50"
              >
                <span className="text-accent">{item.icon}</span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">{item.label}</span>
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
    <footer className="mx-auto w-full max-w-5xl px-4 pt-6 pb-10 sm:px-6">
      <div className="flex flex-col justify-between gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
