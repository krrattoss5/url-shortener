import { useEffect, useState } from "react"
import { type User, type Urls, type Country } from "../Types.d"

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
  const countries:Country[] | null = user?.countries || null
  return {links, user, countries}
}

export default useUsers