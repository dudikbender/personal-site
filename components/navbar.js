import Link from 'next/link'
import styles from './navbar.module.css'
export const siteTitle = 'David Bender\'s Site'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={50}
            width={50}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}></a>
        </Link>
      </h2>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/writing">
        <a>Writing</a>
      </Link>
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}