import styles from "@/styles/inspiration/inspirationBanner.module.css";

export default function InspirationBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <img
          src="/img/Banner-large.webp"
          alt="LagaTVSpel banner consoles"
          className={styles.banner}
        />
        <div className={styles.infoBoxOverlay}>
          <div className={styles.infoBoxRowItem}>
            <h1>Inspiration</h1>
            <p>
              Nedan har ni några exempel på modifierade handkontroller. Tveka
              inte till att kontakta oss så kan vi komma överens om det exakta
              temat eller färgerna just du önskar!
            </p>
            <a href="/kontakt" className={styles.buttonLink}>
              Kontakta oss
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
