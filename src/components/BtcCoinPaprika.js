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
import { ClassNames } from "@emotion/react";

const BtcCoinCapPrice = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    try {
      const url = "https://api.coinpaprika.com/v1/tickers/btc-bitcoin";
      const response = await fetch(url);
      const data = await response.json();
      const price = Number(data.quotes.USD.price);
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
            image="https://www.paracriptos.com/wp-content/uploads/2021/01/coinpaprika-logo-768x308.png"
            alt="Coincap"
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Coinpaprika
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

export default BtcCoinCapPrice;
