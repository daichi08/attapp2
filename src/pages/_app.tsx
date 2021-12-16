import { AppProps } from 'next/app'
import Header from '../components/header'
import Footer from '../components/footer'
import { AuthProvider } from '../lib/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default MyApp
