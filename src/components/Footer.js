import React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  CardActionArea,
  Stack,
  Button,
  Box,
  TextField,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <Container align="center">
        <Box
          sx={{
            color: "#000",
            height: "45vh",
            marginTop: "10",
            marginBottom: "0",
          }}
          align="center"
        >
          <Grid container spacing={2} direction="row" justifyContent="center">
            <Grid item xs={3}>
              <Typography variant="h5" align="left">
                USD-BTC Converter
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography align="left" variant="h6">
                Contact
              </Typography>
              <Stack
                spacing={1}
                direction="column"
                align="left"
                marginTop="1rem"
              >
                <Typography variant="p">Developer: Luis Centeno</Typography>
                <Typography variant="p">Address: Buenos Aires</Typography>
                <Typography variant="p">Telegram: @luis1080</Typography>
              </Stack>
            </Grid>
            <Grid item xs={3} align="left" color="inherit">
              <Typography variant="h6">Subscribe to our Newsletter</Typography>
              <Stack spacing={6} marginTop="1rem" direction="row">
                <TextField label="Email" fullWidth />
                <Button
                  size="large"
                  variant="contained"
                  color="secondary"
                  sx={{ color: "white" }}
                >
                  Send
                </Button>
              </Stack>
              <Stack spacing={4} marginTop="1rem" direction="row" align="left">
                <IconButton>
                  <GitHubIcon />
                </IconButton>
                <IconButton>
                  <GoogleIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" sx={{ marginTop: "6rem" }} />
          <Typography
            variant="p"
            align="center"
            component="div"
            marginTop="1rem"
          >
            2021 | "All I need is only solutions" | USD-BTC Converter 1.0 | By
            Luis Centeno
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
