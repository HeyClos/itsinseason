import '@/styles/globals.css'
import { Roboto, Aboreto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={aboreto.className}>
      <Component {...pageProps} />
    </main>
  )
}
