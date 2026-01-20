import InspirationTile from "@/components/inspiration/InspirationTile";
import Banner from "@/components/inspiration/InspirationBanner";
import layoutStyles from "@/styles/layout.module.css";
import styles from "@/styles/inspiration/inspiration.module.css";

export default function InspirationPage() {
  const images = [
    {
      id: 1,
      small: "/img/inspiration/insp1-small.webp",
      large: "/img/inspiration/insp1-large.webp",
      alt: "Inspiration 1",
    },
    {
      id: 2,
      small: "/img/inspiration/insp2-small.webp",
      large: "/img/inspiration/insp2-large.webp",
      alt: "Inspiration 2",
    },
    {
      id: 3,
      small: "/img/inspiration/insp3-small.webp",
      large: "/img/inspiration/insp3-large.webp",
      alt: "Inspiration 3",
    },
    {
      id: 4,
      small: "/img/inspiration/insp4-small.webp",
      large: "/img/inspiration/insp4-large.webp",
      alt: "Inspiration 4",
    },
  ];

  return (
    <div className={layoutStyles.page}>
      <Banner />
      <main className={layoutStyles.main}>
        <div className={styles.inspirationGrid}>
          {images.map((img) => (
            <InspirationTile
              key={img.id}
              smallSrc={img.small}
              largeSrc={img.large}
              altText={img.alt}
            />
          ))}
        </div>
        <a href="/" className={styles.buttonLink}>
          Till startsidan
        </a>
      </main>
    </div>
  );
}
