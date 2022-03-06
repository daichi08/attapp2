import { AppProps } from "next/app";
import { AuthProvider } from "../lib/auth";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Router from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography>Header</Typography>

            <Box>
              <ButtonGroup variant="text" color="inherit">
                {/* TODO: 切り分け */}
                <Button onClick={(e) => {e.preventDefault; Router.push("/signIn")}}>サインイン</Button>
                <Button onClick={(e) => {e.preventDefault; Router.push("/signUp")}}>サインアップ</Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AuthProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </AuthProvider>

      <AppBar position="static" sx={{ position: "absolute", bottom: 0 }}>
        <Container>
          <Toolbar>
            <Typography>Footer</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default MyApp;
