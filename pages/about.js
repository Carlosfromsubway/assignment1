import Head from "next/head"
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <>
        <Head>
        <title>About Us</title>
        <meta name="tyler" content="MDIA 2109" />
        <meta property="title" content='Assignment #1 - About Us Page' />
        <meta property="description" content='BCIT Digital Design and Development Diploma' />
        <link rel="icon" href='/favicon.png' />
      </Head>
  <div className={styles.aboutbackground}> 
    <div className={styles.containerabout}>
        <h1> About us</h1>
        <h1></h1>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <h2></h2>
        <h2></h2>
        <h3></h3>

    </div>

    <ul>
        <li>Applied & Natural Sciences</li>
        <li>Business & Media</li>
        <li>Computing & IT</li>
        <li>Engineerin</li>
        <li>Health Sciences</li>
        <li>Trades & Apprenticeships</li>
    </ul>
    <a> 
          <span> 
            <img></img>
          </span>
        </a>
        <a> 
          <span> 
            <img></img>
          </span>
        </a>
    </div>
      </>)}