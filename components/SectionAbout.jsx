import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { NextLinkComposed } from "./MuiNextLink";
import SectionHeading from "./SectionHeading";

const SectionAbout = () => {
  return (
    <Container component="section" id="about" maxWidth="md" sx={{ py: 10 }}>
      <SectionHeading kicker="01 — About" title="A bit about me" />
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} sm={7}>
          <Typography sx={{ color: "text.secondary", mb: 2, fontSize: "1.05rem" }}>
            I&apos;m a results-driven backend engineer with roughly seven years of
            experience designing and delivering robust, scalable services in
            fast-moving product companies — Spotify, Target, and a stretch in ad
            tech (Accenture / Sovrn / Starcom).
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2, fontSize: "1.05rem" }}>
            Lately I&apos;ve been building backend infrastructure and AI-augmented
            platforms — leveraging LLMs, MCP servers, code-generation tools, and
            intelligent automation to accelerate development velocity and time to
            production. I care about user-centric products, ethical AI, and leading
            cross-functional teams from ideation through production.
          </Typography>
          <Button
            component={NextLinkComposed}
            to="/about-me"
            variant="outlined"
            size="large"
            sx={{ mt: 2 }}
          >
            More about me
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              bgcolor: "background.paper",
              p: 2,
            }}
          >
            <Image
              src="/coder.svg"
              alt="Illustration of a developer at work"
              layout="responsive"
              width={800}
              height={600}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
