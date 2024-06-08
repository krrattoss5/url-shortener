import { useState } from "react"

const Login = () => {
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
    } else {
      alert(data.message)
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={user.email} type="text" onChange={handleChange} />
      <input name="password" value={user.password} type="password" onChange={handleChange} />
      <button type="submit">entrar</button>
    </form>
  )
}

export default Login