import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>   
    </Head>
    <main>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </div>
  )
}

export default MyApp
