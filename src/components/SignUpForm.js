import React from "react";
import { useState } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Container,
  Grid,
  CardActionArea,
  Stack,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { Send, Mood, SentimentSatisfiedIcon } from "@mui/icons-material";
import ThanksMessage from "./ThanksMessage";

const SignUpForm = ({ setOpenPopUp }) => {
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thanks");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setOpenPopUp(false);
      }, 2000);
    } else {
      setMessage("Please enter your email");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };

  return (
    <>
      <Container align="center" maxWidth="xl">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 3, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {showMessage && <ThanksMessage message={message} />}
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Button type="submit" onClick={handleSubmit} endIcon={<Send />}>
            Submit
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default SignUpForm;
