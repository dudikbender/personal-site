import Link from 'next/link'
import styles from './navbar.module.css'
export const siteTitle = 'David Bender\'s Site'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import React,{useEffect} from 'react';

export default function NavBar() {
  const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  }, [])
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

   return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={70}
            width={70}
          />
        </a>
      </Link>
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