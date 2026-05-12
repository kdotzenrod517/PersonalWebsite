import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MailOutline from "@mui/icons-material/MailOutline";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import { NextLinkComposed } from "./MuiNextLink";

const ContactCTA = () => {
  return (
    <Box component="section" id="contact-cta" sx={{ py: 12 }}>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography
          variant="overline"
          sx={{ color: "primary.main", letterSpacing: 3, fontWeight: 600 }}
        >
          06 — Contact
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, mt: 1, mb: 2 }}>
          Let&apos;s connect
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 4 }}>
          Whether it&apos;s a backend problem worth chewing on, an AI-augmented
          workflow, or just a hello — my inbox is open.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            component={NextLinkComposed}
            to="/contact"
            variant="contained"
            size="large"
            startIcon={<MailOutline />}
          >
            Send a message
          </Button>
          <Button
            component="a"
            href="/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            size="large"
            startIcon={<DescriptionOutlined />}
          >
            View résumé
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactCTA;
