import { FC, useRef, useState } from "react"
import styles from './CreateShortURL.module.css'
import { ClipBoardIcon, Locker } from "../icons"

const CreateShortURL: FC = () => {

  const inputRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const [shortURL, setShortURL] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = inputRef.current?.value
    const title = titleRef.current?.value
    const token = localStorage.getItem('token')

    fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify({url,title})
    }).then(res => res.json()).then(({shortUrl}) => {
      setShortURL(shortUrl)
    })
  }

  const handleClipboard = () => navigator.clipboard.writeText(`http://localhost:3001/${shortURL}`)

  return (
    <div className={styles.main}>

        <div className={styles.containerForm}>
          <form className={styles.form} onSubmit={handleSubmit} >

            <h2 className={styles.title}>Create new</h2>

            <label className={styles.labelColumn}>Destination</label>
            <input ref={inputRef} type="text" className={styles.input} placeholder='https://example.com/my-long-url' />

            <label className={styles.labelColumn}>Title(optional)</label>
            <input ref={titleRef} type="text" className={styles.input} />

            <div className={styles.containerInputs}>
              <div>
                <label className={styles.labelRow}>Domain<Locker /></label>

                <input ref={titleRef} type="text" value='https://localhost:3001' className={styles.input} disabled />
              </div>

              <span className={styles.separator}>/</span>

              <div>
                <label className={styles.labelRow}>Custom back-half (optional)</label>

                <input ref={titleRef} type="text" className={styles.input} />
              </div>
            </div>



            <button className={styles.button}>Acorta</button>
          </form>
            {shortURL?.length > 0 ? <><a href={`http://localhost:3001/${shortURL}`} className={styles.url} target="blanc">
              {`http://localhost:3001/${shortURL}`}
            </a><div onClick={handleClipboard}><ClipBoardIcon /></div></> : null}
        </div>
      </div>
  )
}

export default CreateShortURL