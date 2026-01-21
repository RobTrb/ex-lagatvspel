import ContactForm from "@/components/kontakt/ContactForm";
import styles from "@/styles/layout.module.css";
import Banner from "@/components/kontakt/KontaktBanner";

export default function Kontakt() {
  return (
    <div className={styles.page}>
      <Banner />
      <main className={styles.main}>
        <ContactForm />
        <a href="/" className={styles.buttonLink}>
          Till startsidan
        </a>
      </main>
    </div>
  );
}
