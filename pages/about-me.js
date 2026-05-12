import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import SectionHeading from "@components/SectionHeading";

const education = [
  {
    degree: "M.S. Software Engineering",
    school: "Quantic School of Business and Technology",
    note: "In progress · Remote",
  },
  {
    degree: "M.S. Computer Science",
    school: "Regis University",
    note: "Denver, CO",
  },
  {
    degree: "B.S. Marketing (Minor: Management)",
    school: "Loyola University Chicago",
    note: "Chicago, IL",
  },
];

const AboutMePage = () => {
  return (
    <Container maxWidth="md" sx={{ pt: { xs: 14, md: 16 }, pb: 12 }}>
      <SectionHeading kicker="About" title="Hi, I'm Krista" />

      <Stack spacing={2.5} sx={{ color: "text.secondary", fontSize: "1.05rem", maxWidth: 720 }}>
        <Typography component="p" sx={{ fontSize: "inherit" }}>
          I&apos;m a backend engineer based in New York with about seven years of
          experience designing and delivering robust, scalable services in
          fast-moving product companies. I started in ad tech — automating
          tag-matching workflows and learning the bones of analytics and
          tracking infrastructure — then moved into backend engineering at Target
          and, since 2021, Spotify.
        </Typography>
        <Typography component="p" sx={{ fontSize: "inherit" }}>
          At Spotify I&apos;ve built core backend services for Spotify for Artists
          tooling and streaming personalization, architected systems behind the
          audiobooks expansion for 80M+ eligible users, and led an observability
          working group focused on reliability — SLO tuning, GKE right-sizing, and
          disaster-recovery exercises. More recently I&apos;ve leaned into
          AI-augmented development: integrating Claude MCP servers for automated
          service documentation, building AI-assisted code-review workflows, and
          exploring embedding-based personalization.
        </Typography>
        <Typography component="p" sx={{ fontSize: "inherit" }}>
          I care a lot about user-centric products, ethical and human-centered AI,
          and leading cross-functional teams from ideation through production.
        </Typography>
      </Stack>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h5" sx={{ mb: 3 }}>
        Education
      </Typography>
      <Stack spacing={2}>
        {education.map((e) => (
          <Box key={e.degree}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {e.degree}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {e.school} — {e.note}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h5" sx={{ mb: 2 }}>
        Volunteering
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Advisor — Women in Leadership with AI-Driven Engagement
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Minnesota State University, Mankato
      </Typography>
      <Typography sx={{ color: "text.secondary", maxWidth: 720 }}>
        I serve on the advisory board for a leadership-development program that
        integrates AI-driven engagement and personalized learning. I provide
        guidance on applying AI to improve participant engagement and learning
        outcomes, and bring an industry perspective on ethical, human-centered AI
        in modern leadership and decision-making.
      </Typography>

      <Box sx={{ mt: 6 }}>
        <Button
          component="a"
          href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          size="large"
          startIcon={<DescriptionOutlined />}
        >
          Download résumé
        </Button>
      </Box>
    </Container>
  );
};

export default AboutMePage;
