import { AppProps } from "next/app";
import { AuthProvider } from "../lib/auth";
import { Container } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Container maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
