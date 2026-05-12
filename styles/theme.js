import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";

const ACCENT = "#a78bfa"; // soft violet
const ACCENT_2 = "#fbbf24"; // warm amber
const BG_DEFAULT = "#0a0a0f";
const BG_PAPER = "#15151f";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: ACCENT,
      light: "#c4b5fd",
      dark: "#7c5cff",
      contrastText: "#0a0a0f",
    },
    secondary: {
      main: ACCENT_2,
      contrastText: "#0a0a0f",
    },
    background: {
      default: BG_DEFAULT,
      paper: BG_PAPER,
    },
    text: {
      primary: "#f4f4f6",
      secondary: "#a1a1ad",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily:
      '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { backgroundColor: BG_DEFAULT },
        "::selection": { backgroundColor: alpha(ACCENT, 0.3) },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0, color: "transparent" },
      styleOverrides: {
        root: {
          backgroundColor: alpha(BG_DEFAULT, 0.6),
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 8, paddingInline: 22, textTransform: "none" },
        containedPrimary: {
          "&:hover": { backgroundColor: "#7c5cff" },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.2)",
          "&:hover": {
            borderColor: ACCENT,
            backgroundColor: alpha(ACCENT, 0.08),
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: BG_PAPER,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 14,
          transition: "border-color .2s ease, transform .2s ease",
          "&:hover": {
            borderColor: alpha(ACCENT, 0.4),
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: alpha(ACCENT, 0.12),
          border: `1px solid ${alpha(ACCENT, 0.25)}`,
          color: "#e9e6f7",
          fontWeight: 500,
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
