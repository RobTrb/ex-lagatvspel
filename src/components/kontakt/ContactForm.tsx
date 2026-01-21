"use client";

import { useState } from "react";
import styles from "@/styles/kontakt/contactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    if (!name || name.length < 2) newErrors.name = "Vänligen ange ditt namn.";
    if (!message || message.length < 10)
      newErrors.message = "Meddelandet måste vara minst 10 tecken.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      newErrors.email = "Vänligen ange en giltig e-postadress.";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Skickar...");
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xgoorqdp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Tack! Ditt meddelande har skickats.");
        form.reset();
      } else {
        setStatus("Något gick fel. Försök igen.");
      }
    } catch (err) {
      setStatus("Kunde inte ansluta till servern.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            className={errors.name ? styles.inputError : ""}
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">E-postadress</label>
          <input
            type="email"
            id="email"
            name="email"
            className={errors.email ? styles.inputError : ""}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={errors.message ? styles.inputError : ""}
          ></textarea>
          {errors.message && (
            <span className={styles.errorText}>{errors.message}</span>
          )}
        </div>

        <button type="submit" className={styles.submitButton}>
          Skicka Meddelande
        </button>
        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>
    </div>
  );
}
