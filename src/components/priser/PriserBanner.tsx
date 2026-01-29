import styles from "@/styles/priser/priserBanner.module.css";
import Image from "next/image";

export default function PriserBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerContainer}>
        <Image
          src="/img/Banner-large.webp"
          alt="LagaTVSpel banner consoles"
          className={styles.banner}
          width={1440}
          height={500}          
          priority
          fetchPriority="high"
          loading="eager"
        />
        <div className={styles.infoBoxOverlay}>
          <div className={styles.infoBoxRowItem}>
            <h1>Våra priser</h1>
            <p>
              Här nedan hittar du vår aktuella prislista för våra tjänster. Har
              ni några frågor eller funderingar, tveka inte att kontakta oss!
            </p>
            <div className={styles.buttonContainer}>
              <a href="/kontakt" className={styles.buttonLink}>
                Kontakta oss
              </a>
              <a href="/boka" className={styles.buttonLink}>
                Boka tid
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
