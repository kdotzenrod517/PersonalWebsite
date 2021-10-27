import { Container, Grid, Typography } from "@mui/material";
import CardSection from "./ReviewCard/Card";

const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        More about me
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <CardSection
            imgSrc="/runner.jpg"
            imgAlt="runner"
            title="Running"
            desc="I love to run. I've completed three marathons and qualified for
            Boston."
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <CardSection
            imgSrc="/concerts.jpg"
            imgAlt="conerts"
            title="Concerts"
            desc="I enjoy going to shows, concerts, and music festivals."
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <CardSection
            imgSrc="/food.jpg"
            imgAlt="food"
            title="Food"
            desc="I love going out to new restaurants and trying new foods. Brunch is my favorite meal."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
