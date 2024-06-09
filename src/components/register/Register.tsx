import { FC, useState } from "react"
import styles from '../login/Login.module.css'
import { Link } from "react-router-dom"

const Register: FC = () => {
  const [user, setUser] = useState({
      email:"",
      password:"",
      username:"",
      name:"Jhon",
      lastname:"Doe"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3001/create-user',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <main className={styles.container}>

      <Link to='/'>
        <img src="/bitly_logo.svg" alt="logo-bitlyclone" />
      </Link>

      <div className={styles.containerForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          <p>Already have an account? <Link to='/iniciar-sesion'>Log in</Link></p>
          <label>Username</label>
          {/* <input name="name" value={user.name} type="text" placeholder="Nombre" onChange={handleChange} />
          <input name="lastname" value={user.lastname} type="text" placeholder="Apellido" onChange={handleChange}  /> */}
          <input name="username" value={user.username} type="text" placeholder="Nik" onChange={handleChange}  />
          <label>Email</label>
          <input name="email" value={user.email} type="email" placeholder="Correo" onChange={handleChange}  />
          <label>Password</label>
          <input name="password" value={user.password} type="password" placeholder="Confirmar Contraseña" onChange={handleChange}  />

          <button type="submit">crear</button>

          <span>
            By logging in with an account, you agree to Bitly's <Link className={styles.slink} to='#'>Terms of Service</Link>, <Link className={styles.slink} to='#'>Privacy Policy</Link> and <Link className={styles.slink} to='#'>Acceptable Use Policy</Link>.
          </span>

        </form>
      </div>

      <div className={styles.section}>
        <img src="/connections_platform_product.png" alt="bitly-analytics" />
        <h4>Power your links, QR Codes, and Link-in-bio with Bitly's Connections Platform.
        </h4>
      </div>

    </main>
  )
}

export default Register