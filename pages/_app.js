import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function MyApp({ Component, pageProps }) {  
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])
  return (
  <div >
    <Head>   
    </Head>
    <main className="mb-auto overflow-auto">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  </div>
  )
}

export default MyApp
