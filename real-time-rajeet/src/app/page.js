'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./addUser";
import {useState } from "react";
import DisplayUsers from "./components/DisplayUsers";


export default function Home() {
  let [users, setUsers] = useState([]);
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" Rajeet Rautela "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.main}>
          <div className="chat app wall"> <h1>calculator Application</h1></div>
          <div className="Calculator app wall"><h1> Chat Application</h1></div>

        </div>
      </div>

      <div className={styles.grid} >
        {/* <div className="notknown"> */}
        {!!false ? <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>No users sorry</p>
        </a> :
        <DisplayUsers class={styles.card}/> 
             }
        <AddUser name="test"/>
      </div>
    </main>
  );
}
