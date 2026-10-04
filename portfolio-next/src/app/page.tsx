import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Hero,
  Navbar,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
