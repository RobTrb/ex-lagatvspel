"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/inspiration/inspirationTile.module.css";

interface InspirationTileProps {
  smallSrc: string;
  largeSrc: string;
  altText: string;
}

export default function InspirationTile({ smallSrc, largeSrc, altText }: InspirationTileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className={styles.tile} onClick={toggleModal}>
        <img src={smallSrc} alt={altText} className={styles.thumbnail} />
        <div className={styles.overlay}>
          <span>Visa fullstorlek</span>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={toggleModal} aria-label="Stäng">
              &times;
            </button>
            <img src={largeSrc} alt={altText} className={styles.largeImage} />
          </div>
        </div>
      )}
    </>
  );
}