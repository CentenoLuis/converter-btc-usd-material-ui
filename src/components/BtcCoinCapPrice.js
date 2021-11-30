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

const BtcCoinCapPrice = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    try {
      const response = await fetch("https://api.coincap.io/v2/assets/bitcoin");
      const data = await response.json();
      const price = Number(data.data.priceUsd);
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
            component="img"
            image="https://www.ideasbynature.com/wp-content/uploads/2018/07/coincap-logo-dark.jpg"
            alt="Coincap"
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Coincap
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
