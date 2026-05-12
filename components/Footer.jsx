import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import useSWR from "swr";

const socials = [
  { label: "GitHub", href: "https://github.com/kdotzenrod517", Icon: GitHub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krista-dotzenrod",
    Icon: LinkedIn,
  },
  { label: "Email", href: "mailto:kdotzenrod517@gmail.com", Icon: MailOutline },
];

const fetcher = (url) => fetch(url).then((res) => res.json());

const Footer = () => {
  const { data } = useSWR("/api/page-views", fetcher, {
    revalidateOnFocus: false,
  });
  const views =
    typeof data?.pageViews === "number" && data.pageViews > 0
      ? data.pageViews
      : null;

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="md">
        <Stack direction="row" justifyContent="center" spacing={1.5} sx={{ mb: 3 }}>
          {socials.map(({ label, href, Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <Icon />
            </IconButton>
          ))}
        </Stack>
        <Typography align="center" variant="body2" sx={{ color: "text.secondary" }}>
          © {new Date().getFullYear()} Krista Dotzenrod
          {views ? ` · ${views.toLocaleString()} views` : ""}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
