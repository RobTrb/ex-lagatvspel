import styles from "@/styles/home/home.module.css";
import InfoBoxTopHome from "@/components/home/InfoBoxTopHome";
import InfoBoxBottomHome from "@/components/home/InfoBoxBottomHome";
import ContentHome from "@/components/home/ContentHome";
import BookingBoxHome from "@/components/home/BookingBoxHome";

export default function Home() {
  return (
    <div className={styles.page}>
      <InfoBoxTopHome />
      <main className={styles.main}>
        <ContentHome />
      </main>
      <InfoBoxBottomHome />
      <main className={styles.main}>
        <BookingBoxHome />
      </main>
    </div>
  );
}
