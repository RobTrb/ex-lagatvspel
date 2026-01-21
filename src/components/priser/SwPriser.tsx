import styles from "@/styles/priser/priserColumns.module.css";

export default function SwPriser() {
  return (
    <div className={styles.priserColumn}>
      <h2>Switch Priser</h2>
      <span className={styles.spanLine}></span>
      <ul>
        <li>Modchip Switch OLED: 1500:-</li>
        <li>Modchip Switch V1/V2: 1300:-</li>
        <li>Modchip Switch Lite: 1000:-</li>
        <li>Laddningsreparation: 700:-</li>
        <li>Hall Effect (båda Joy-Cons): 350:-</li>
      </ul>
    </div>
  );
}
