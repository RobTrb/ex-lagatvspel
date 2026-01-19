import styles from "@/styles/InfoBoxBottomHome.module.css";

export default function InfoBoxBottomHome() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <img
          src="/img/Banner-large-broken.webp"
          alt="LagaTVSpel banner broken consoles"
          className={styles.banner}
        />
        <div className={styles.infoBoxOverlay}>
          <div className={styles.infoboxRow}>
            <img src="/img/circles.svg" alt="Decorative circle" />
            <div className={styles.infoBoxRowItem}>
              <h2>Snabb och pålitlig reparation</h2>
              <p>
                Vi lagar din Nintendo Switch, PlayStation eller Xbox. Flerårig
                erfarenhet och många nöjda kunder över hela Sverige.
              </p>
            </div>
          </div>
          <div className={styles.infoboxRow}>
            <img src="/img/circiut.svg" alt="Decorative circiut board" />
            <div className={styles.infoBoxRowItem}>
              <h2>Modifiering och chippning</h2>
              <p>
                Vi erbjuder skräddarsydda modifieringar som förbättrar din
                spelupplevelse och öppnar nya möjligheter
              </p>
            </div>
          </div>
          <div className={styles.infoboxRow}>
            <img
              src="/img/dottedcircle.svg"
              alt="Decorative circle with dots inside"
            />
            <div className={styles.infoBoxRowItem}>
              <h2>Rengöring och underhåll</h2>
              <p>
                Våra rengöringstjänster tar bort damm och smuts som påverkar
                prestandan och förlänger livslängden för dina enheter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
