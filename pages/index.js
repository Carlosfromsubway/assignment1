import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="tyler" content="MDIA 2109" />
        <meta property="title" content='Assignment #1 - Home Page' />
        <meta property="description" content='BCIT Digital Design and Development Diploma' />
        <link rel="icon" href='/favicon.png' />
      </Head>
      <main className={styles.main}>
        <h1>"An investment in knowledge pays the best interest.</h1>

        <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
        </p>

        <a> 
        <button name="More About Us">More About Us</button>
        <button name="Contact Us">Contact Us</button>
        </a>

        <a> 
          <span> 
            <img></img>
          </span>
        </a>

      </main>
    </>
  )
}
