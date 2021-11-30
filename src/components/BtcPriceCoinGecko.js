import React from "react";
import { useState, useEffect } from "react";
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
import useStyles from "../assets/customStyles";

const BtcPriceCoinGecko = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    try {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      const response = await fetch(url);
      const data = await response.json();
      const price = Number(data.bitcoin.usd);
      setPrice(price);
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
            height="275"
            image="https://u.today/sites/default/files/styles/736x/public/2021-07/8815.jpg"
            alt="Coincap"
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Coingecko
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

export default BtcPriceCoinGecko;
