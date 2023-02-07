import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

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
   
          <Image src={"/icons/menu-icon.png"} width={30} height={30} className={styles.Menu}
            />
    
 
      
            <Image src={"/icons/graduation-hat.png"} width={5} height={120} className={styles.gradhat}/> 

        <div className={styles.containerindex}> 
        <h1 className={styles.header}>An investment in knowledge pays the best interest.</h1>

        <hr className={styles.line}></hr>

        <p >Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
        </p>

        <a href='/about'> 
        <button name="More About Us" className={styles.linkbutton} href="/about">More About Us</button>
  
        </a>

        <a href='/contact'className={styles.contain}>
        <button name="Contact Us" className={styles.linkbutton}>Contact Us</button>
        </a>
        </div>

        <a href="/about">
          <span>
            <img src="/icons/downwardArrow.png"></img>
          </span>
        </a>
      </main>
    </>
  )
}
