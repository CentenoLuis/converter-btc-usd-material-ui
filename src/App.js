import React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import customTheme from "./assets/customTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import BtcUsdConverter from "./components/BtcUsdConverter";
import Carousel from "./components/Carousel";
import BtcNews from "./components/BtcNews";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Navbar />
        <Carousel />
        <Container>
          <main>
            <Hero />
            <Prices />
            <BtcUsdConverter />
            {/* <BtcNews /> */}
          </main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
