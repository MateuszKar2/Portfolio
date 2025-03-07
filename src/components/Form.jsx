import React, { useState } from 'react';
import styles from './../module/Form.module.css'; // Ścieżka do pliku CSS

const Form = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Formularz nie jest widoczny po zamknięciu
  }

  return (
    <form className={styles.form}>
      {/* Krzyżyk do zamykania formularza */}
      <span className={styles.form__close} onClick={handleClose}>
        &times;
      </span>

      {/* Podtytuł formularza */}
      <h2 className={styles.form__subtitle}>Please fill in your details</h2>

      <label className={styles.form__label} htmlFor="name">
        Name
        <input className={styles.form__input} type="text" placeholder="name" name="login" id="name" />
      </label>
      <label className={styles.form__label} htmlFor="surname">
        Surname
        <input className={styles.form__input} type="text" placeholder="surname" name="login" id="surname" />
      </label>
      <label className={styles.form__label} htmlFor="phone">
        Phone
        <input className={styles.form__input} type="text" placeholder="phone" name="login" id="phone" />
      </label>
      
      {/* Przycisk submit, umieszczony po prawej stronie */}
      <button className={styles.form__button} type="submit">Submit</button>
    </form>
  );
};

export default Form;