import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import React, { useRef, useEffect } from "react";

import MyCanvas from '../components/canvas.js';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Photo 2 Social Networks</title>
        <meta name="description" content="Process and edit photos for exporting to social networks" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="http://www.lolo.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={44}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center} id="main">
          <div className={styles.fileupload} >
            <input id="foto-files" type="file">

            </input>
          </div>

          <MyCanvas mywidth="100" id="foto-reel" className={styles.photoreel} />
          <MyCanvas mywidth="200" id="foto-image" className={styles.mycanvas} />

        </div>

        <div className={styles.right}>

        </div>

        <div className={styles.grid}>
          
        </div>
      </main>
    </>
  )
}
