import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardSection from "./ReviewCard/Card";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    imgSrc: "/runner.jpg",
    imgAlt: "runner",
    title: "Running",
    desc: "Three marathons in, and a Boston qualifier. Long runs are where I do my best thinking.",
  },
  {
    imgSrc: "/concerts.jpg",
    imgAlt: "concerts",
    title: "Live music",
    desc: "Shows, concerts, and music festivals — always up for the next one.",
  },
  {
    imgSrc: "/food.jpg",
    imgAlt: "food",
    title: "Food",
    desc: "New restaurants, new cuisines, and an unshakeable belief that brunch is the best meal.",
  },
];

const SectionReview = () => {
  return (
    <Container component="section" id="beyond" maxWidth="md" sx={{ py: 10 }}>
      <SectionHeading kicker="05 — Beyond work" title="When I'm not shipping code" />
      <Grid container spacing={3}>
        {interests.map((item) => (
          <Grid container item justifyContent="center" xs={12} sm={6} md={4} key={item.title}>
            <CardSection {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionReview;
