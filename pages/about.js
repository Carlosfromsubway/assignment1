import Head from "next/head"
import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
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
        <h1 className={styles.header}> About us</h1> 
        
        <p className={styles.aboutp}>We are proud to deliver an education that goes beyond textbooks and classrooms</p>
        <p className={styles.aboutp}>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
        <p className={styles.aboutp}> Through close collaboration with industry, our nextwork of alumini and partners continue to achieve global success.</p>
        <h2>Infomational Sessions</h2>
        <p className={styles.aboutp}>Information sessions are a simple way to figure our the next step along your career path. Learn more about the programs that interest you</p>
        <h3>Big Info</h3>
        <p className={styles.aboutp}>Big Info is the largest program expo and Information session at BCIT. It's your chance to find out about all our programs - from a business, computing. and health to engineering, trades and aplied sciences.</p>
        <p className={styles.aboutp}>If you missed our fall event the next Big Info is schduled to return on February 15, 2023</p>
        
        
        <h2>Campus tours</h2>
        <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
        

    </div>
    <h1>Departments</h1>
    <ul>
        <li>Applied & Natural Sciences</li>
        <li>Business & Media</li>
        <li>Computing & IT</li>
        <li>Engineerin</li>
        <li>Health Sciences</li>
        <li>Trades & Apprenticeships</li>
    </ul>
    <a href="/"> 
          <span> 
            <img></img>
          </span>
        </a>
        <a href="/contact"> 
          <span> 
            <img></img>
          </span>
        </a>
    </div>
      </>)}