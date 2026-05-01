import Head from 'next/head'
import Header from './Header'
import Contact from './Contact'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>The Apps Developers — Design & HEOR</title>
        <meta name="description" content="Design-led engineering, HEOR evidence generation, and product strategy for healthcare." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Contact />
      <footer className="footer">© The Apps Developers</footer>
    </div>
  )
}
