import Head from 'next/head'
import Layout, { siteTitle, email } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Work and writing from David Bender</p>
      </section>
    </>
  )
}