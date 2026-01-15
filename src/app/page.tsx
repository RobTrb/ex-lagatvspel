import styles from "../styles/home.module.css";
import InfoBoxTopHome from "@/components/InfoBoxTopHome";

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
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <h1>Våra tjänster</h1>
            <p>Upptäck vårt utbud av tjänster</p>
            <h2>Konsolreparation</h2>
            <p>
              Snabb och pålitlig reparation anpassad efter dina behov. Vi
              reparerar och ersätter trasiga kompenenter på{" "}
              <strong>Nintendo Switch, Playstation och XBOX</strong>. Vi
              åtgärdar problem som exempelvis överhettning och trasiga{" "}
              <strong>HDMI-portar</strong>.
            </p>
            <h2>Moddning och chippning</h2>
            <p>
              Modifierar och installerar{" "}
              <strong>chip för anpassad och förbättrad spelupplevelse</strong>.
            </p>
          </div>
          <div className={styles.servicesImgContainer}>
            <img
              src="/img/longpsctrl.jpg"
              alt="Image of disassembled playstation controller"
            ></img>
          </div>
        </div>
      </main>
      <div className={styles.bannerContainer}>
        <img
          src="/img/Banner-large-broken.webp"
          alt="LagaTVSpel banner broken consoles"
          className={styles.banner}
        />
      </div>
      <main className={styles.main}></main>
    </div>
  );
}
