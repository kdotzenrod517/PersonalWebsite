import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import MuiNextLink from "./MuiNextLink";

const Navbar = ({ navLinks }) => {
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={3} alignItems="center">
        {navLinks.map(({ title, path, external }, i) =>
          external ? (
            <Button
              key={`${title}${i}`}
              component="a"
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={<DescriptionOutlined fontSize="small" />}
              sx={{ textTransform: "capitalize" }}
            >
              {title}
            </Button>
          ) : (
            <MuiNextLink
              key={`${title}${i}`}
              href={path}
              variant="button"
              underline="none"
              sx={{
                color: "text.primary",
                opacity: 0.75,
                textTransform: "capitalize",
                transition: "opacity .2s ease, color .2s ease",
                "&:hover": { opacity: 1, color: "primary.main" },
                "&.active": { opacity: 1, color: "primary.main" },
              }}
            >
              {title}
            </MuiNextLink>
          )
        )}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
