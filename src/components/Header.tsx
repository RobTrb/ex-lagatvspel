"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/headerFooter.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
        <img
          src="/img/LOGO-150x150.webp"
          alt="LagaTVSpel logo"
          className={styles.logo}
        />
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
              <Link
                href="/"
                className={pathname === "/" ? styles.active : styles.inactive}
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                href="/inspiration"
                className={
                  pathname === "/inspiration" ? styles.active : styles.inactive
                }
              >
                Inspiration
              </Link>
            </li>
            <li>
              <Link
                href="/priser"
                className={
                  pathname === "/priser" ? styles.active : styles.inactive
                }
              >
                Priser
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={
                  pathname === "/kontakt" ? styles.active : styles.inactive
                }
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                href="/tidsbokning"
                className={
                  pathname === "/tidsbokning" ? styles.active : styles.inactive
                }
              >
                Boka tid
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
