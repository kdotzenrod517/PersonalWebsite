import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionSkills from "@components/SectionSkills";
import SectionExperience from "@components/SectionExperience";
import SectionProjects from "@components/SectionProjects";
import SectionReview from "@components/SectionReview";
import ContactCTA from "@components/ContactCTA";

const Homepage = () => {
  return (
    <>
      <Hero />
      <SectionAbout />
      <SectionSkills />
      <SectionExperience />
      <SectionProjects />
      <SectionReview />
      <ContactCTA />
    </>
  );
};

export default Homepage;
