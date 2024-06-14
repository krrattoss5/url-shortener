import { useEffect, useState } from "react"
import { type User, type Urls } from "../Types.d"

const useUsers = () => {
  const [user, setUser] = useState<User | null>(null)

  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch('http://localhost:3001/me',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': `${token}`
      }
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch((e) => console.log(e.message))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const links:Urls[] | null = user?.links || null

  return {links, user}
}

export default useUsers