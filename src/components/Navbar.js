import React from "react";
import { AppBar, Toolbar, Typography, Stack, Link } from "@mui/material";
import CalculateTwoToneIcon from "@mui/icons-material/CalculateTwoTone";
import { makeStyles } from "@mui/styles";

import links from "./navLinks";

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Stack spacing={4} direction="row">
            <CalculateTwoToneIcon />
            <Link href="#" target="blank" underline="none" color="inherit">
              <Typography>USD-BTC Converter</Typography>
            </Link>
            {links.map((link) => {
              return (
                <div id={link.id}>
                  <Link
                    href="#"
                    target="blank"
                    underline="none"
                    color="inherit"
                  >
                    <Typography>{link.text}</Typography>
                  </Link>
                </div>
              );
            })}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
