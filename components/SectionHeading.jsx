import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Small shared section header: kicker (overline) + title, left-aligned.
const SectionHeading = ({ kicker, title, sx }) => (
  <Box sx={{ mb: 5, ...sx }}>
    {kicker && (
      <Typography
        variant="overline"
        sx={{ color: "primary.main", letterSpacing: 3, fontWeight: 600 }}
      >
        {kicker}
      </Typography>
    )}
    <Typography variant="h3" sx={{ fontWeight: 700, mt: 0.5 }}>
      {title}
    </Typography>
  </Box>
);

export default SectionHeading;
