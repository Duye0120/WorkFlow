import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ArcoLayout from '../components/ArcoLayout'
import navArray from '../components/ArcoLayout/utils/layoutNavArray'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArcoLayout NavArray={navArray}>
      <Component {...pageProps} />
    </ArcoLayout>
  )
}

export default MyApp
