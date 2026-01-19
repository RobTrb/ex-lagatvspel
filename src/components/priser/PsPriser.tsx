import styles from "@/styles/priser/priserColumns.module.css";

export default function PsPriser() {
    return (
        <div className={styles.priserColumn}>
            <h2>PlayStation Priser</h2>
            <span className={styles.spanLine}></span>
            <ul>
                <li>Byte av HDMI-port: 1200:-</li>
                <li>HDMI encoder: 1200:-</li>
                <li>Rengöring + Service: 600:-</li>
                <li>TMR Hall Effect: 450:-</li>
                <li>Hall Effect: 400:-</li>
                <li>Nytt batteri: 150:-</li>
                <li>Färgad front: 50:-</li>
                <li>Färgade spakar: 50:-</li>
                <li>Färgade knappar: 50:-</li>                
            </ul>
        </div>
    );
}