import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    company: "Spotify",
    title: "Backend Engineer / Senior Software Engineer",
    location: "New York, NY",
    period: "Aug 2021 – Present",
    points: [
      "Built core backend services powering Spotify for Artists internal tooling and streaming personalization at the scale of millions of monthly active users.",
      "Architected the systems powering audiobooks expansion for 80M+ eligible users across multiple countries, focused on content personalization.",
      "Integrated Claude MCP servers to automate backend service documentation and AI-assisted code-review workflows, improving delivery speed, code quality, and test coverage.",
      "Lead an observability working group standardizing reliability best practices — SLO tuning, GKE right-sizing, and disaster-recovery exercises. Mentor junior engineers and contribute to hiring & onboarding.",
    ],
  },
  {
    company: "Target",
    title: "Backend Engineer / Senior Software Engineer",
    location: "Minneapolis, MN",
    period: "Sep 2017 – Jan 2021",
    points: [
      "Rotated through two backend teams — inventory management and customer-data pipelines.",
      "Partnered with product teams to translate business requirements into scalable services and API endpoints.",
      "Helped build Target advertising tooling in-house on top of third-party APIs.",
    ],
  },
  {
    company: "Sovrn / OAO / Starcom",
    title: "Support Engineer / Ad Operations Manager",
    location: "Boulder, CO & Chicago, IL",
    period: "2013 – 2017",
    points: [
      "Transitioned from ad ops into technical engineering support, troubleshooting high-volume programmatic ad platforms.",
      "Automated tag-matching scripts in JavaScript, eliminating 20+ hours/week of manual work.",
      "Built a strong foundation in analytics, tracking, and tag-based ad-tech infrastructure.",
    ],
  },
];

const SectionExperience = () => {
  return (
    <Container component="section" id="experience" maxWidth="md" sx={{ py: 10 }}>
      <SectionHeading kicker="03 — Experience" title="Where I've worked" />
      <Box
        sx={{
          position: "relative",
          pl: { xs: 3, sm: 4 },
          "&::before": {
            content: '""',
            position: "absolute",
            left: { xs: 6, sm: 7 },
            top: 4,
            bottom: 4,
            width: "2px",
            bgcolor: "divider",
          },
        }}
      >
        {roles.map((role) => (
          <Box key={role.company} sx={{ position: "relative", pb: 6, "&:last-of-type": { pb: 0 } }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: -22, sm: -27 },
                top: 6,
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "primary.main",
                boxShadow: (t) => `0 0 0 4px ${t.palette.background.default}`,
              }}
            />
            <Typography variant="h6">
              {role.title} ·{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                {role.company}
              </Box>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
              {role.period} — {role.location}
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, color: "text.secondary" }}>
              {role.points.map((p, i) => (
                <Box component="li" key={i} sx={{ mb: 1 }}>
                  {p}
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default SectionExperience;
