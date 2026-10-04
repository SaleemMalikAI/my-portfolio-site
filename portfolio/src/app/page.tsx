import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Hero,
  Navbar,
  ProjectsSection,
  StackSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="bg-grid pointer-events-none fixed inset-0 -z-10" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
