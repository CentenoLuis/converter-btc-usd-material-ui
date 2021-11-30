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

const BtcBinancePrice = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const url = "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";
    try {
      const response = await fetch(url);
      const data = await response.json();
      const price = parseInt(data.price);
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
            image="https://public.bnbstatic.com/static/images/common/ogImage.jpg"
            alt="Binance"
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Binance
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

export default BtcBinancePrice;
