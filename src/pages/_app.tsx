import { AppProps } from 'next/app'
import { AuthProvider } from '../lib/auth'
import { Container, CssBaseline } from '@mui/material'
import MenuDrawer from '../components/DrawerHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MenuDrawer>
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      </MenuDrawer>
    </AuthProvider>
  )
}

export default MyApp
