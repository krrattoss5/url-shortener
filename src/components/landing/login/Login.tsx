import { FC, useState } from "react"
import s from './Login.module.css'
import { Link } from "react-router-dom"

const Login: FC = () => {
  const [user, setUser] = useState({
    email:'',
    password:''
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

    const response = await fetch('http://localhost:3001/login',{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(user)
    })

    const data = await response.json()

    if(data?.token){
      localStorage.setItem('token',data.token)
      window.location.href = '/dashboard'
    } else {
      alert(data.message)
    }
  }

  return (
    <main className={s.container}>

      <Link to='/'>
        <img src="/bitly_logo.svg" alt="logo-bitlyclone" />
      </Link>


      <div className={s.containerForm}>
        <form onSubmit={handleSubmit} className={s.form}>
          <h1>Log in and start sharing</h1>
          <p>Don't have an account? <Link to='/crear-usuario'>Sign up</Link></p>
          <label>Email</label>
          <input className={s.input} name="email" value={user.email} type="text" onChange={handleChange} />
          <label>Password</label>
          <input className={s.input} name="password" value={user.password} type="password" onChange={handleChange} />
          <Link className={s.link} to='#'>Forgot your password?</Link>
          <button type="submit">Log in</button>
          <span>
            By logging in with an account, you agree to Bitly's <Link className={s.slink} to='#'>Terms of Service</Link>, <Link className={s.slink} to='#'>Privacy Policy</Link> and <Link className={s.slink} to='#'>Acceptable Use Policy</Link>.
          </span>
        </form>
      </div>

      <div className={s.section}>
        <img src="/analytics-illustration.png" alt="bitly-analytics" />
        <h4>Analyze your links and QR Codes as easily as creating them</h4>
      </div>

    </main>
  )
}

export default Login