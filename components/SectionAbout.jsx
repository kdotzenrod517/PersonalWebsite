import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import MuiNextLink from "@components/MuiNextLink";
import Button from "@mui/material/Button";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/coder.svg"
            alt="A coder"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            Hi! My Name is Krista
          </Typography>
          <Typography textAlign="center" sx={{ mb: 5 }}>
            {`A former ad tech professional who learned how to code!`}
          </Typography>
          <MuiNextLink href="/about-me" underline="none">
            <Button variant="outlined" size="large">
              About Me
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
