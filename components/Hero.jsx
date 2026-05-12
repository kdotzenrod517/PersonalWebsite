import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import MailOutline from "@mui/icons-material/MailOutline";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { NextLinkComposed } from "./MuiNextLink";

const Hero = ({
  name = "Krista Dotzenrod",
  role = "Backend Engineer",
  intro = "I design and ship scalable backend services, data pipelines, and AI-augmented platforms. ~7 years across Spotify, Target, and ad tech.",
  resumeHref = "/files/resume.pdf",
  contactHref = "/contact",
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "92vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        // layered radial accent glows on the dark background
        background: (theme) => `
          radial-gradient(60% 55% at 20% 15%, ${theme.palette.primary.dark}33 0%, transparent 60%),
          radial-gradient(45% 45% at 85% 25%, ${theme.palette.secondary.main}22 0%, transparent 55%),
          radial-gradient(60% 60% at 60% 100%, ${theme.palette.primary.main}1f 0%, transparent 60%),
          ${theme.palette.background.default}
        `,
      }}
    >
      <Container maxWidth="md" sx={{ py: 12 }}>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: 3, fontWeight: 600 }}
        >
          Hi, my name is
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            mt: 1,
            lineHeight: 1.05,
            fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.5rem" },
          }}
        >
          {name}.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "text.secondary",
            mt: 1,
            fontSize: { xs: "1.6rem", sm: "2.25rem", md: "2.75rem" },
          }}
        >
          {role}
        </Typography>
        <Typography
          sx={{ color: "text.secondary", mt: 3, maxWidth: 620, fontSize: "1.1rem" }}
        >
          {intro}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 5 }}>
          <Button
            component="a"
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            size="large"
            startIcon={<DescriptionOutlined />}
          >
            View résumé
          </Button>
          <Button
            component={NextLinkComposed}
            to={contactHref}
            variant="outlined"
            size="large"
            startIcon={<MailOutline />}
          >
            Get in touch
          </Button>
        </Stack>
      </Container>
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          color: "text.secondary",
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          animation: "heroBounce 2s infinite",
          "@keyframes heroBounce": {
            "0%, 100%": { transform: "translate(-50%, 0)" },
            "50%": { transform: "translate(-50%, 8px)" },
          },
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: 2 }}>
          SCROLL
        </Typography>
        <KeyboardArrowDown />
      </Box>
    </Box>
  );
};

export default Hero;
