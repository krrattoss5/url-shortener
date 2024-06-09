import { FC, useState } from "react"
import styles from './Register.module.css'

const Register: FC = () => {
  const [user, setUser] = useState({
      email:"",
      password:"",
      username:"",
      name:"",
      lastname:""
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="name" value={user.name} type="text" placeholder="Nombre" onChange={handleChange} />
      <input name="lastname" value={user.lastname} type="text" placeholder="Apellido" onChange={handleChange}  />
      <input name="username" value={user.username} type="text" placeholder="Nik" onChange={handleChange}  />
      <input name="email" value={user.email} type="email" placeholder="Correo" onChange={handleChange}  />
      <input type="password" placeholder="Contraseña" onChange={handleChange}  />
      <input name="password" value={user.password} type="password" placeholder="Confirmar Contraseña" onChange={handleChange}  />

      <button type="submit">crear</button>
    </form>
  )
}

export default Register