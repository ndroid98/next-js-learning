import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./addUser";

export default function Home() {
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

      <div className={styles.grid}>
        <AddUser name="test"/>
      </div>
    </main>
  );
}
