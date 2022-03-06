import { AppProps } from "next/app";
import { AuthContext, AuthProvider } from "../lib/auth";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Typography,
  ButtonGroup,
  Button,
  Toolbar,
} from "@mui/material";
import Router from "next/router";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useContext(AuthContext);

  return (
    <AuthProvider>
      <CssBaseline />
      <Header />

      <Container>
        <Component {...pageProps} />
      </Container>

      <AppBar position="static" sx={{ position: "absolute", bottom: 0 }}>
        <Container>
          <Toolbar>
            <Typography>Footer</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </AuthProvider>
  );
}

export default MyApp;
