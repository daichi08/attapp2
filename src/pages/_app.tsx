import { AppProps } from 'next/app'
import Header from '../components/header'
import { AuthProvider } from '../lib/auth'
import { Container, CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  )
}

export default MyApp
