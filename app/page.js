import { useRef, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const inputRef = useRef()
  const [shortURL, setShortURL] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = inputRef.current.value
    // ToDo: peticion al API
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>URL Shortener</h1>

        <p className={styles.description}>
          Acorta tus URLs aquí!
        </p>

        <div className={styles.grid}>
          <form className={styles.card}>
            <input ref={inputRef} type="text" className={styles.input} placeholder='URL' onSubmit={handleSubmit} />
            <button className={styles.button}>Acorta</button>
            <span className={styles.input}>
              {shortURL}
            </span>
          </form>
        </div>
      </main>
    </div>
  );
}
