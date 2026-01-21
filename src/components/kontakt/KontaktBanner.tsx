import styles from "@/styles/kontakt/kontaktBanner.module.css";

export default function KontaktBanner() {
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
            <h1>Kontakt</h1>
            <p>
              Har ni några frågor, funderingar eller önskar föra en dialog kring
              vad vi kan göra för er. Fyll i formuläret nedan så kontaktar vi er
              så fort vi kan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
