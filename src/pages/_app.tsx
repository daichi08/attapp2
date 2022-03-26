import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { AppProps } from 'next/app';
import Header from '../components/header';
import { AuthProvider } from '../lib/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CssBaseline />
      <Header />

      <Container>
        <Component {...pageProps} />
      </Container>

      <AppBar position='static' sx={{ position: 'absolute', bottom: 0 }}>
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
