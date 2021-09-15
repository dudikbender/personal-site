import Head from 'next/head'
import Layout, { siteTitle, email } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Sidebar from '../components/sidebar'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function About({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>About David Bender</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Information about me</h2>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Contact me at {email}
        </p>
        <a href="https://github.com/dudikbender">Github</a> -- <a href='https://www.linkedin.com/in/david-bender-a0032365/'>LinkedIn</a>
      </section>
    </>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}