import React from "react";
import { useState, useEffect } from "react";
import useStyles from "../assets/customStyles";
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

const BtcCryptoComparePrice = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const price = data.USD;
      setPrice(price.toFixed(0));
    } catch {
      console.log("FETCH ERROR");
    }
  };
  return (
    <>
      <Grid item>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            component="img"
            image="https://www.cryptocompare.com/media/35651334/0.png"
            alt="Binance"
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Cryptocompare
            </Typography>
            <Typography variant="h4">{price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              Visit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default BtcCryptoComparePrice;
