import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import SectionHeading from "./SectionHeading";

// Edit these lists freely — pulled from the résumé as a starting point.
const groups = [
  {
    title: "Backend & Infrastructure",
    items: [
      "Scalable services",
      "REST APIs",
      "gRPC APIs",
      "Data pipelines",
      "Personalization systems",
      "GCP",
      "GKE / Kubernetes",
      "SLOs & reliability",
      "Disaster-recovery testing",
      "Embeddings / vector retrieval",
    ],
  },
  {
    title: "AI Development & Tooling",
    items: [
      "Claude",
      "MCP server integration",
      "Claude Skills",
      "ChatGPT / Codex",
      "Meta prompt engineering",
      "LLM-validated testing",
      "AI-assisted code review",
    ],
  },
  {
    title: "Languages & Tools",
    items: ["Java", "Kotlin", "Scala", "JavaScript", "TypeScript", "SQL", "MongoDB", "Supabase", "Git"],
  },
];

const SectionSkills = () => {
  return (
    <Box component="section" id="skills" sx={{ bgcolor: "background.paper", py: 10 }}>
      <Container maxWidth="md">
        <SectionHeading kicker="02 — Skills" title="What I work with" />
        <Grid container spacing={5}>
          {groups.map(({ title, items }) => (
            <Grid item xs={12} sm={4} key={title}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {title}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {items.map((item) => (
                  <Chip key={item} label={item} size="small" />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionSkills;
