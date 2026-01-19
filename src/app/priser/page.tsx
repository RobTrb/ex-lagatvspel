import styles from "@/styles/layout.module.css";
import priserStyles from "@/styles/priser/priser.module.css";
import PsPriser from "@/components/priser/PsPriser";
import SwPriser from "@/components/priser/SwPriser";
import XboxPriser from "@/components/priser/XboxPriser";
import BookingBoxHome from "@/components/home/BookingBoxHome";


export default function Priser() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>            
            <h1 className={priserStyles.priserH1}>Våra priser</h1>
            <h3>Här nedan har ni vår aktuella prislista</h3>
            <div className={priserStyles.priserContainer}>
                <PsPriser />
                <SwPriser />
                <XboxPriser />
            </div>
            <BookingBoxHome />
            <a href="/" className={priserStyles.buttonLink}>
            Till startisdan
          </a>
            </main>
        </div>
    )
}