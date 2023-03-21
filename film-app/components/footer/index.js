import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        Made by&nbsp;
        <Link href="https://www.linkedin.com/in/beyza-ozpinar/" target="_blank">
            Beyza Özpınar
        </Link>
    </footer>
  )
}

export default Footer