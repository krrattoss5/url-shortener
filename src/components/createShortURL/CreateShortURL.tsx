import { FC, useRef, useState } from "react"
import styles from './CreateShortURL.module.css'

const CreateShortURL: FC = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  const [shortURL, setShortURL] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = inputRef.current?.value
    // ToDo: peticion al API
    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({url})
    }).then(res => res.json()).then(({shortUrl}) => {
      setShortURL(shortUrl)
    })
  }

  return (
    <div className={styles.main}>
        <h1 className={styles.title}>URL Shortener</h1>

        <p className={styles.description}>
          Acorta tus URLs aquí!
        </p>

        <div className={styles.grid}>
          <form className={styles.card} onSubmit={handleSubmit} >
            <input ref={inputRef} type="text" className={styles.input} placeholder='URL' />
            <button className={styles.button}>Acorta</button>
          </form>
            {shortURL.length > 0 ? <a href={`http://localhost:3001/${shortURL}`} className={styles.url} target="blanc">
              {`http://localhost:3001/${shortURL}`}
            </a> : null}
        </div>
      </div>
  )
}

export default CreateShortURL