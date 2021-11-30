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

const BtcGeminiPrice = () => {
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    try {
      const response = await fetch("https://api.gemini.com/v2/ticker/btcusd");
      const data = await response.json();
      const receivedData = Object.entries(data);
      const price = parseInt(receivedData[6][1]);
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
            image="https://bitfinanzas.com/wp-content/uploads/Exchange-de-criptomonedas-Gemini-se-une-a-la-tecnologia-Nasdaq-para-implementar-software-de-vigilancia-750x375.png"
            alt="Coincap"
          />
          <CardContent>
            <Typography gutterBottom variant="p">
              Price from Gemini
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

export default BtcGeminiPrice;
