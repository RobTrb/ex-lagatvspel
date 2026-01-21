import styles from "@/styles/layout.module.css";
import priserStyles from "@/styles/priser/priser.module.css";
import PsPriser from "@/components/priser/PsPriser";
import SwPriser from "@/components/priser/SwPriser";
import XboxPriser from "@/components/priser/XboxPriser";
import BookingBoxHome from "@/components/home/BookingBoxHome";
import Banner from "@/components/priser/PriserBanner";

export default function Priser() {
  return (
    <div className={styles.page}>
      <Banner />
      <main className={styles.main}>
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
  );
}
