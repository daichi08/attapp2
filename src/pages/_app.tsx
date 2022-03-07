import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { AppProps } from "next/app";
import { useEffect } from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { AuthProvider } from "../lib/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
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
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
