import React from "react";
import useStyles from "../assets/customStyles";
import BtcBinancePrice from "./BtcBinancePrice";
import BtcCoinCapPrice from "./BtcCoinCapPrice";
import BtcCryptoComparePrice from "./BtcCryptoComparePrice";
import BtcGeminiPrice from "./BtcGeniniPrice";
import BtcCoinGecko from "./BtcPriceCoinGecko";
import BtcCoinPaprika from "./BtcCoinPaprika";
import BtcAverage from "./BtcAverage";
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
  Divider,
} from "@mui/material";

const Prices = () => {
  const classes = useStyles();
  return (
    <>
      <Container align="center" maxWidth="xl">
        {/* <h1>Average Price</h1> */}
        <BtcAverage />

        <Grid
          container
          spacing={12}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <BtcBinancePrice />
          <BtcGeminiPrice />
          <BtcCryptoComparePrice />
          <BtcCoinCapPrice />
          <BtcCoinGecko />
          <BtcCoinPaprika />
        </Grid>
      </Container>
    </>
  );
};

export default Prices;
