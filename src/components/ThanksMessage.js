import React from "react";
import { Typography, Dialog, DialogContent } from "@mui/material";
import { Mood, SentimentSatisfied } from "@mui/icons-material";

const ThanksMessage = (props) => {
  const { message } = props;

  if (message === "Thanks") {
    return (
      <>
        <Dialog open="true">
          <DialogContent>
            <Typography>{message}</Typography>
            <Mood fontSize="large" />
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Dialog open="true">
        <DialogContent>
          <Typography>{message}</Typography>
          <SentimentSatisfied fontSize="large" />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThanksMessage;
