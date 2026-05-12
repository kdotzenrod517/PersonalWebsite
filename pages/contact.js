import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import SectionHeading from "@components/SectionHeading";

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const toastifySuccess = () => {
    toast("Thanks — your message is on its way!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notifyToast",
    });
  };

  const onSubmit = async ({ name, email, subject, message }) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        { name, email, subject, message },
        process.env.NEXT_PUBLIC_USER_ID
      );
      reset();
      toastifySuccess();
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong sending that. Try again?", {
        position: "bottom-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ pt: { xs: 14, md: 16 }, pb: 12 }}>
      <SectionHeading kicker="Contact" title="Get in touch" />
      <Typography sx={{ color: "text.secondary", mb: 5 }}>
        Have a question, an opportunity, or just want to say hi? Drop a note below
        — or email me directly at{" "}
        <Box
          component="a"
          href="mailto:kdotzenrod517@gmail.com"
          sx={{ color: "primary.main" }}
        >
          kdotzenrod517@gmail.com
        </Box>
        .
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={3}>
          <TextField
            label="Name"
            fullWidth
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
            {...register("name", {
              required: "Please enter your name",
              maxLength: { value: 30, message: "Please use 30 characters or less" },
            })}
          />
          <TextField
            label="Email address"
            type="email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email && "Please enter a valid email address"}
            {...register("email", { required: true, pattern: EMAIL_PATTERN })}
          />
          <TextField
            label="Subject"
            fullWidth
            error={Boolean(errors.subject)}
            helperText={errors.subject?.message}
            {...register("subject", {
              required: "Please enter a subject",
              maxLength: { value: 75, message: "Subject cannot exceed 75 characters" },
            })}
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={5}
            error={Boolean(errors.message)}
            helperText={errors.message && "Please enter a message"}
            {...register("message", { required: true })}
          />
          <Box>
            <Button
              type="submit"
              variant="contained"
              size="large"
              startIcon={<SendIcon />}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </Box>
        </Stack>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default ContactPage;
