import styles from "../styles/home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <img src="/img/Banner-large.webp" alt="LagaTVSpel banner" className={styles.banner} />      
      <main className={styles.main}>        
        <h1>Welcome to LagaTVSpel</h1>
        <p>Gaming console and controller repair services</p>
      </main>
    </div>
  );
}
