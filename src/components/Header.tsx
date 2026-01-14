"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/headerFooter.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <img src="/img/LOGO-150x150.webp" alt="LagaTVSpel logo" className={styles.logo} />
        <h1 className={styles.headerTitle}>LAGATVSPEL</h1>
        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Hem</Link>
            </li>
            <li>
              <Link href="/inspiration">Inspiration</Link>
            </li>
            <li>
              <Link href="/priser">Priser</Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
            <li>
              <Link href="/tidsbokning">Boka tid</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
