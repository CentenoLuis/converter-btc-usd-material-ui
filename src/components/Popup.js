import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import SignUpForm from "./SignUpForm";

const Popup = (props) => {
  const { title, children, openPopUp, setOpenPopUp } = props;
  return (
    <Dialog open={openPopUp}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h3" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button onClick={() => setOpenPopUp(false)}>
            <Close />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <SignUpForm setOpenPopUp={setOpenPopUp} />
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
