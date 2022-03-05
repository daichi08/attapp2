import { AppProps } from "next/app";
import { AuthProvider } from "../lib/auth";
import { AppBar, Box, Container, CssBaseline, Typography, ButtonGroup, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar position="static" color='secondary'>
        <Container>
          <Toolbar>
            <Typography>
              Header
            </Typography>

            <Box>
              <ButtonGroup variant="text" color="inherit">
                <Button>サインイン</Button>
                <Button>サインアップ</Button>
              </ButtonGroup>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container>
      <AuthProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </AuthProvider>
    </Container>
    </>
  );
}

export default MyApp;
