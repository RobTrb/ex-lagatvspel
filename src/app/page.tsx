import styles from "../styles/home.module.css";
import InfoBoxTopHome from "@/components/InfoBoxTopHome";
import InfoBoxBottomHome from "@/components/InfoBoxBottomHome";
import ContentHome from "@/components/ContentHome";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <img
          src="/img/Banner-large.webp"
          alt="LagaTVSpel banner futuristic consoles"
          className={styles.banner}
        />
        <div className={styles.infoBoxOverlay}>
          <InfoBoxTopHome />
        </div>
      </div>
      <main className={styles.main}>
        <ContentHome />
      </main>      
      <InfoBoxBottomHome />
      <main className={styles.main}></main>
    </div>
  );
}
