import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import LaunchIcon from "@mui/icons-material/Launch";
import SectionHeading from "./SectionHeading";

// Edit / add projects here.
const projects = [
  {
    title: "Social-group dating app",
    blurb:
      "A prototype dating experience built around social groups rather than solo swiping — full-stack architecture, mobile shell, and OAuth sign-in.",
    tags: ["Lovable", "Supabase", "TypeScript", "Capacitor", "Google OAuth"],
    href: null,
  },
  {
    title: "Lily's Florist — inventory system",
    blurb:
      "Backend schema and REST APIs for a small business to manage inventory and orders — a product-minded look at modeling a real domain.",
    tags: ["REST APIs", "Schema design", "Backend"],
    href: null,
  },
  {
    title: "This site",
    blurb:
      "Personal portfolio built (and rebuilt) quickly with Claude and Cursor for an MSSE project — Next.js, MUI, deployed on Vercel.",
    tags: ["Next.js", "MUI", "Claude", "Cursor"],
    href: null,
  },
  {
    title: "Advisor — Women in Leadership with AI-Driven Engagement",
    blurb:
      "Advisory board member for a leadership-development program at Minnesota State University, Mankato — guidance on applying AI to engagement, learning outcomes, and ethical, human-centered decision-making.",
    tags: ["Advisory", "Ethical AI", "Leadership"],
    href: null,
  },
];

const SectionProjects = () => {
  return (
    <Box component="section" id="projects" sx={{ bgcolor: "background.paper", py: 10 }}>
      <Container maxWidth="md">
        <SectionHeading kicker="04 — Projects" title="Things I've built & where I help" />
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {p.title}
                    </Typography>
                    {p.href && (
                      <Link
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: "text.secondary", display: "inline-flex" }}
                        aria-label={`Open ${p.title}`}
                      >
                        <LaunchIcon fontSize="small" />
                      </Link>
                    )}
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary", flexGrow: 1 }}>
                    {p.blurb}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2 }}>
                    {p.tags.map((t) => (
                      <Chip key={t} label={t} size="small" />
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionProjects;
