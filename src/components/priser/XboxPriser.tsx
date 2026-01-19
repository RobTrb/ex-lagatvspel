import styles from "@/styles/priser/priserColumns.module.css";

export default function XboxPriser() {
    return (
        <div className={styles.priserColumn}>
            <h2>Xbox Priser</h2>
            <span className={styles.spanLine}></span>
            <ul>
                <li>Byte av HDMI-port: 1200:-</li>
                <li>Rengöring: 600:-</li>
                <li>Hall effect: 400:-</li>                               
            </ul>
        </div>
    );
}