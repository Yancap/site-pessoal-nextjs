import type { AppProps } from 'next/app'
import "../scss/global.scss"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
