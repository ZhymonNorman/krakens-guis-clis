import '../styles/globals.css'
import '@fontsource/roboto-condensed';
import '@fontsource/encode-sans';
import '@fontsource/bebas-neue';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
