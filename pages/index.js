import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionImage from "@components/SectionImage";
import SectionReview from "@components/SectionReview";
import Grid from "@mui/material/Grid";
import NavigationCard from "@components/NavigationCard";

// Special thanks to this blog: https://www.ansonlowzf.com/create-a-website-with-material-ui-v5-nextjs/?fbclid=IwAR0aOlc5L_xvJ6aRLu0oiMHzrsfWgfmc_FdZiVlKhMdS5tbuMERPErBcuyE
// For helping walk me through this site!
const Homepage = () => {
  return (
    <>
      <Hero
        imgSrc="/homepage-hero.jpg"
        imgAlt="code and succulent"
        title="Welcome!"
        subtitle="Excited to have you here"
      />
      <SectionAbout />
      <SectionImage imgSrc="/coder2.jpg" imgAlt="code on a computer" />
      <SectionReview />
      <SectionImage imgSrc="/sparkles.jpg" imgAlt="sparkles" />
      <Container maxWidth="md" sx={{ my: 15 }}>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/laptop.jpg"
              imgAlt="laptop"
              title="About Me"
              desc="More about my background."
              pagePath="./about-me"
              ctaText="about me"
            />
          </Grid>
          <Grid container item justifyContent="center" xs={12} md={6}>
            <NavigationCard
              imgSrc="/mpls.jpg"
              imgAlt="minneapolis"
              title="Contact me"
              desc="Contact me"
              pagePath="./contact"
              ctaText="contact"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;
