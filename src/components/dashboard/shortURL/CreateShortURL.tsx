import { FC, useState } from "react";
import styles from "./index.module.css";
import { ClipBoardIcon, Locker } from "../../icons";

const CreateShortURL: FC = () => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
    customShort: "",
  });
  const [shortURL, setShortURL] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    fetch("https://api-shortener.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(({ shortUrl }) => {
        console.log(shortURL);
        setShortURL(shortUrl);
      });

    // window.location.href = '/dashboard/links'
  };

  const handleClipboard = () =>
    navigator.clipboard.writeText(
      `https://api-shortener.onrender.com/${shortURL}`
    );

  return (
    <div className={styles.main}>
      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Create new</h2>

          <label className={styles.labelColumn}>Destination</label>
          <input
            type="text"
            className={styles.input}
            placeholder="https://example.com/my-long-url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />

          <label className={styles.labelColumn}>Title (optional)</label>
          <input
            type="text"
            className={styles.input}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <div className={styles.containerInputs}>
            <div>
              <label className={styles.labelRow}>
                Domain
                <Locker />
              </label>
              <input
                type="text"
                value="https://localhost:3001"
                className={styles.input}
                disabled
              />
            </div>

            <span className={styles.separator}>/</span>

            <div>
              <label className={styles.labelRow}>
                Custom back-half (optional)
              </label>
              <input
                type="text"
                className={styles.input}
                name="customShort"
                value={formData.customShort}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className={styles.button}>Shorten</button>
        </form>
        {shortURL && (
          <>
            <a
              href={`https://api-shortener.onrender.com/${shortURL}`}
              className={styles.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`https://api-shortener.onrender.com/${shortURL}`}
            </a>
            <div onClick={handleClipboard}>
              <ClipBoardIcon />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateShortURL;
