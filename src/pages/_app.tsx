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

function MyApp({ Component, pageProps }: AppProps) {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  return (
    <AuthProvider>
      <CssBaseline />
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography>Header</Typography>
            <Box>
              {/* TODO: コンポーネント化 */}
              <ButtonGroup variant="text" color="inherit">
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    Router.push("/signIn");
                  }}
                >
                  サインイン
                </Button>
                <Button
                  onClick={(e) => {
                    e.preventDefault;
                    Router.push("/signUp");
                  }}
                >
                  サインアップ
                </Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>


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
