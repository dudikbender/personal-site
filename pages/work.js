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

export default function Work({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingLg}>
        <p>Work and Experience</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Fiera Real Estate</h2>
        <h3 className={utilStyles.headingMd}>2019 - Present</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the role...
        </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Royal Bank of Canada</h2>
        <h3 className={utilStyles.headingMd}>2015 - 2019</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the role...
        </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Dental Corporation of Canada</h2>
        <h3 className={utilStyles.headingMd}>2015</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the role...
        </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Sportsnet Canada</h2>
        <h3 className={utilStyles.headingMd}>2014 - 2015</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the role...
        </p>
        </section>
        <hr class="solid"></hr>
        <section className={utilStyles.headingLg}>
        <p>Education</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Ted Rogers School of Management</h2>
        <h3 className={utilStyles.headingMd}>MBA, graduated 2014</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the school and program...
        </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>University of Toronto</h2>
        <h3 className={utilStyles.headingMd}>Honours BA, graduated 2011</h3>
      </section>
      <section className={utilStyles.headingSm}>
        <p>Details about the school and program...
        </p>
        </section>
    </>
  )
}