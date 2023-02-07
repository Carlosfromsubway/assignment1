import Head from "next/head"
import styles from '../styles/Home.module.css'
import Image from "next/image"
export default function Contact() {
    return (
        <>
        <Head>
        <title>Contact Us</title>
        <meta name="tyler" content="MDIA 2109" />
        <meta property="title" content='Assignment #1 - Contact Us Page' />
        <meta property="description" content='BCIT Digital Design and Development Diploma' />
        <link rel="icon" href='/favicon.png' />
      </Head>
      <main className={styles.contactbg}> 
      <div>
            <title>Contact Us</title>
            <h1 className={styles.header}>Contact Us</h1>
            <p>Want to discuss? Lets chat!</p>
        </div>
        <Image src={"/icons/menu-icon.png"} width={30} height={30} className={styles.Menu}
            />
    
 
      
            <Image src={"/icons/graduation-hat.png"} width={5} height={120} className={styles.gradhat}/> 
            <div className={styles.formcont}>

                <form>
                    <fieldset className={styles.box}>
                        <table>

                            <thead>
                            <input
                            className={styles.inputcont}
                             type="text"

                             placeholder="First Name Here" />
                            <input
                            className={styles.inputcont}
                             type="text"

                             placeholder="Last Name Here" />
                                <tr></tr>
                            </thead>
                            <thead>
                            <input
                            className={styles.inputcont}
                             type="text"

                             placeholder="Email Name Here" />
                                <tr></tr>
                            </thead>
                        </table>

                    </fieldset>

                </form>
            </div>
        <a href="/about"> 
          <span> 
            <img src="../icons/upwardArrow.png"></img>
          </span>
        </a>
        </main>
        </>
    )
}