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

const BtcNews = () => {
  const [news, setNews] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const url =
        "https://latest-crypto-news.p.rapidapi.com/newsbtc/bitcoin/latest";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "latest-crypto-news.p.rapidapi.com",
          "x-rapidapi-key":
            "d53bcff803msh0f1d5e1ff389471p1ccdbbjsnef78dfdd7ef0",
        },
      });
      const data = await response.json();
      setNews([...data]);
      console.log(news);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container align="center" maxWidth="xl">
        <Grid
          container
          spacing={12}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {news.map((newsData) => {
            return (
              <Grid item>
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={newsData.articleImage}
                    alt={newsData.articleTitle}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      {newsData.articleTitle}
                    </Typography>
                    <Typography variant="p">
                      Posted: {newsData.articleDate}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      href={newsData.articleUrl}
                      target="blank"
                    >
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Button>Next</Button>
      </Container>
    </>
  );
};

export default BtcNews;
