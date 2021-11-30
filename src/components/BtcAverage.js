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

const AveragePrice = () => {
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      getAverage();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getAverage();
  }, []);

  const getAverage = async () => {
    try {
      const urlCoinGecko =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      const urlBinance =
        "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";
      const urlCoinPaprika =
        "https://api.coinpaprika.com/v1/tickers/btc-bitcoin";
      const urlCryptoCompare =
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
      const urlGemini = "https://api.gemini.com/v2/ticker/btcusd";

      const responseGemini = await fetch(urlGemini);
      const dataGemini = await responseGemini.json();
      const receivedData = Object.entries(dataGemini);
      const priceGemini = parseInt(receivedData[6][1]);

      const responseCryptoCompare = await fetch(urlCryptoCompare);
      const dataCryptoCompare = await responseCryptoCompare.json();
      const priceCryptoCompare = dataCryptoCompare.USD;

      const responseCoinPaprika = await fetch(urlCoinPaprika);
      const dataCoinPaprika = await responseCoinPaprika.json();
      const priceCoinPaprika = Number(dataCoinPaprika.quotes.USD.price);

      const responseBinance = await fetch(urlBinance);
      const dataBinance = await responseBinance.json();
      const priceBinance = parseInt(dataBinance.price);

      const responseCoinGecko = await fetch(urlCoinGecko);
      const dataCoinGecko = await responseCoinGecko.json();
      const priceCoinGecko = Number(dataCoinGecko.bitcoin.usd);

      setAveragePrice(
        (
          (priceBinance +
            priceCoinGecko +
            priceCoinPaprika +
            priceCryptoCompare +
            priceGemini) /
          5
        ).toFixed(0)
      );
    } catch {
      console.log("average error");
    }
  };

  return (
    <>
      <Card style={{ paddingTop: "30px" }}>
        <CardMedia
          component="img"
          height="200"
          width="auto"
          image="https://d500.epimg.net/cincodias/imagenes/2021/08/06/mucho_mas_que_criptos/1628275320_709251_1628771382_noticia_normal_recorte1.jpg"
          alt="Coincap"
        />
        <CardContent>
          <Typography gutterBottom variant="p">
            Average Price
          </Typography>
          <Typography variant="h1">{averagePrice}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default AveragePrice;
