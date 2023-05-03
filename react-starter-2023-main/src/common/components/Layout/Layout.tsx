import React, { FunctionComponent } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

interface props {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<props> = ({ children }) => (
  <>
    <AppBar>
      <Toolbar>
        <Typography variant="h6">My app</Typography>
      </Toolbar>
    </AppBar>
    <Toolbar />
    <Container>
      <Box py={3}>{children}</Box>
    </Container>
  </>
);

export default Layout;
