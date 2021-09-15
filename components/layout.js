import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import NavBar from './navbar'

const name = 'David Bender'
export const email = 'bender2242 [at] gmail.com'
export const siteTitle = 'David Bender\'s Site'

export default function Layout({ children, home }) {
  return (
    <>
    <div className={styles.container}>
      <main>{children}</main>
      </div>
  </>
  )
}