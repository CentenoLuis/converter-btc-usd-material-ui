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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Popup from "./Popup";

const Hero = () => {
  const [openPopUp, setOpenPopUp] = useState(true);
  return (
    <>
      <div>
        <Container align="center" maxWidth="xl">
          <Typography style={{ paddingTop: "0px" }} variant="h4" gutterBottom>
            Why do bitcoins have value?
          </Typography>
          <Typography variant="p" gutterBottom>
            Bitcoins have value because they are useful as a form of money.
            Bitcoin has the characteristics of money (durability, portability,
            fungibility, scarcity, divisibility, and recognizability) based on
            the properties of mathematics rather than relying on physical
            properties (like gold and silver) or trust in central authorities
            (like fiat currencies). In short, Bitcoin is backed by mathematics.
            With these attributes, all that is required for a form of money to
            hold value is trust and adoption. In the case of Bitcoin, this can
            be measured by its growing base of users, merchants, and startups.
            As with all currency, bitcoin's value comes only and directly from
            people willing to accept them as payment.
          </Typography>

          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ paddingTop: "40px" }}
          >
            <Grid item xs={3}>
              <Stack spacing={6} direction="row">
                <Button sx={{ color: "#fff" }} variant="contained" size="large">
                  BUY BTC
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  sx={{ color: "white" }}
                >
                  SELL BTC
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  color="error"
                  onClick={() => setOpenPopUp(true)}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Popup
          openPopUp={openPopUp}
          setOpenPopUp={setOpenPopUp}
          title="Subscribe"
        ></Popup>
      </div>
    </>
  );
};

export default Hero;
