"use client";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useFormState } from "react-dom";
import { sendMessage } from "@/lib/EmailAction";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";

const initialState = {
  errors: {},
  message: null,
  success: false,
};

const ContactPage = () => {
  // @ts-ignore
  const [state, formAction] = useFormState(sendMessage, initialState);
  const router = useRouter();
  const handleClose = () => {
    router.push("/");
  };
  return (
    <>
      <Snackbar
        open={state.success}
        message={state.message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        color="success"
        autoHideDuration={5000}
        onClose={handleClose}
      />
      <Typography variant="h3" component="h3">
        Contact Us
      </Typography>
      <Divider />
      {state?.message && <div>Error: {state.message}</div>}
      <Box component="form" action={formAction} marginTop={3}>
        <TextField
          required
          fullWidth
          id="filled-required"
          label="Name"
          name="name"
          variant="standard"
          helperText="Incorrect entry."
        />
        <TextField
          id="standard-email"
          fullWidth
          required
          label="Email"
          type="email"
          variant="standard"
          name="email"
        />
        <div>
          <TextField
            id="standard-multiline-static"
            label="Comment"
            multiline
            required
            fullWidth
            rows={4}
            placeholder="type your comment"
            variant="standard"
            name="comment"
          />
        </div>

        <Box display="flex" justifyContent="center">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ m: 1 }}
          >
            Submit
          </Button>
          <Button href="/" color="secondary" variant="contained" sx={{ m: 1 }}>
            Back to Home
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactPage;
