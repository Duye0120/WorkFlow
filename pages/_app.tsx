import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ArcoLayout from '../components/ArcoLayout'
import navArray from '../components/ArcoLayout/utils/layoutNavArray'
import React from 'react';
if (typeof document === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ArcoLayout NavArray={navArray}>
      <Component {...pageProps} />
    </ArcoLayout>
  )
}

export default MyApp
