import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import { AppProps } from 'next/app';
import Footer from '../components/Footer';
import Header from '../components/header';
import { AuthProvider } from '../lib/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CssBaseline />
      <Header />

      <Container sx={{ p: 4 }}>
        <Component {...pageProps} />
      </Container>

      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
