import "./App.css";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  return (

      <Box>
        <Nav />
        <Container>
          <Grid container spacing={3} pt={3}>
            <Grid item md={3}>
              <Sidebar />
            </Grid>
            <Grid item md={6}>
              <Content />
            </Grid>
            <Grid item md={3}>
              <Rightbar />
            </Grid>
          </Grid>
        </Container>
      </Box>

  );
}

export default App;
