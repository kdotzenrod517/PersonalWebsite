import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";
import useSWR from "swr";

const Footer = () => {
  const { data } = useSWR(
    `/api/page-views?slug=/`,
    async (url) => {
      const res = await fetch(url);
      return res.json();
    },
    { revalidateOnFocus: false }
  );
  const views = data?.pageViews || 0;
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main" }}>
      <script
        async
        src="https://api.countapi.xyz/hit/kristadotzenrod.com/visits?  callback={callbackName}"
      ></script>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 5 }}>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.facebook.com/krista.dotzenrod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.instagram.com/kdotzenrod/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://twitter.com/Krista517"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter fontSize="large" />
        </MuiNextLink>
      </Stack>
      <Typography align="center" color="common.white">
        {new Date().getFullYear()} || Krista Dotzenrod || {views} views
      </Typography>
    </Box>
  );
};

export default Footer;
