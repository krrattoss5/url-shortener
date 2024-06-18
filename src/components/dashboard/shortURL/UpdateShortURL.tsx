import styles from './index.module.css';
import { Locker } from "../../icons";
import { Urls } from "../../../Types";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  links: Urls[] | null;
}

const UpdateShortURL = ({ links }: Props) => {
  const { id } = useParams();
  const filteredLink = links?.find((l) => l.id.toString() === id);

  const [formData, setFormData] = useState({
    url: filteredLink?.url || '',
    name: filteredLink?.name || '',
    customShort: filteredLink?.shortUrl || ''
  });

  useEffect(() => {
    if (filteredLink) {
      setFormData({
        url: filteredLink.url,
        name: filteredLink.name,
        customShort: filteredLink.shortUrl
      });
    }
  }, [filteredLink]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://api-shortener.onrender.com/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        window.location.reload()
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating link:', error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Update data</h2>

          <label className={styles.labelColumn}>Destination</label>
          <input
            type="text"
            className={styles.input}
            placeholder='https://example.com/my-long-url'
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />

          <label className={styles.labelColumn}>Title</label>
          <input
            type="text"
            className={styles.input}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <div className={styles.containerInputs}>
            <div>
              <label className={styles.labelRow}>Domain<Locker /></label>
              <input type="text" value='https://localhost:3001' className={styles.input} disabled />
            </div>

            <span className={styles.separator}>/</span>

            <div>
              <label className={styles.labelRow}>Custom back-half</label>
              <input
                type="text"
                className={styles.input}
                name="customShort"
                value={formData.customShort}
                onChange={handleChange}
              />
            </div>
          </div>

          <button className={styles.button}>Update</button>
        </form>

      </div>
    </div>
  );
};

export default UpdateShortURL;
