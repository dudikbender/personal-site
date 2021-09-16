import Head from 'next/head'
import Layout, { siteTitle, email } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
// import Sidebar from '../components/sidebar'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Contact({ allPostsData }) {
    return (
      <>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingLg}>
          <p>Contact me</p>
        </section>
        <section className={utilStyles.headingSm}>
          <p>Email: {email}<br /><br />
          <a href="https://github.com/dudikbender">Github</a><br /><br />
          <a href='https://www.linkedin.com/in/david-bender-a0032365/'>LinkedIn</a>
          </p>
        </section>
      </>
    )
  }