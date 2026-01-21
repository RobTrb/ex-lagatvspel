import styles from "@/styles/home/InfoBoxTopHome.module.css";

export default function InfoBoxTopHome() {
  return (
    <div className={styles.infoBoxMainContainer}>
      <img
        src="/img/Banner-large.webp"
        alt="LagaTVSpel banner futuristic consoles"
        className={styles.banner}
      />
      <div className={styles.infoBoxOverlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>Välkommen till konsolspecialisten!</h1>
          <p className={styles.description}>
            Vi på LagaTVSpel i Malmö erbjuder konsolreparation alternativt
            modifikation. Vill du en unik handkontroll eller behöver din konsol
            repareras?
          </p>
          <p className={styles.description}>
            Tveka inte till att kontakta oss. Med 20 års erfarenhet av
            modifikationer och reparationer av konsoler och tillbehör kan vi
            garantera att vi kan täcka upp era konsolrelaterade behov.
          </p>
          <div className={styles.buttonRow}>
            <a href="/inspiration" className={styles.buttonLink}>
              Få inspiration
            </a>
            <a href="/priser" className={styles.buttonLink}>
              Se priser
            </a>
          </div>
          <a href="/priser" className={styles.buttonLink}>
            Boka tid
          </a>
        </div>
      </div>
    </div>
  );
}
