import '../styles/global.css'
import App from 'next/app'
import Layout from '../components/layout'
import NavBar from '../components/navbar'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}