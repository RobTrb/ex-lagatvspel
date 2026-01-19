import styles from "@/styles/home/ContentHome.module.css";

export default function ContentHome() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        <h1>Våra tjänster</h1>
        <p>Upptäck vårt utbud av tjänster</p>
        <h2>Konsolreparation</h2>
        <p>
          Snabb och pålitlig reparation anpassad efter dina behov. Vi reparerar
          och ersätter trasiga kompenenter på{" "}
          <strong>Nintendo Switch, Playstation och XBOX</strong> (bland annat).
          Vi åtgärdar problem som exempelvis överhettning och trasiga{" "}
          <strong>HDMI-portar</strong>.
        </p>
        <h2>Handkontrollreparation och modifikation</h2>
        <p>
          Avhjälper fel på kontroller som drift och sega knappar. Vi rengör,
          reparerar och byter ut defekta delar i din kontroll. Du kanske är
          sugen på att byta färg på knapparna? Ett batteri som håller länge?
          Eller driftfria Hall effect-spakar?
        </p>
        <a href="/inspiration" className={styles.buttonLink}>
          Få inspiration
        </a>
        <h2>Modifikation och chippning</h2>
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
  );
}
