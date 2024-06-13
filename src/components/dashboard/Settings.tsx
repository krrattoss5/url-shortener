import { useEffect, useState } from "react"
import Card from "../links/Card"

const Settings = () => {
  const [user, setUser] = useState(null)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Card
        name={user?.links[user.links.length-1].name}
        id={user?.links[user.links.length-1].name}
        url={user?.links[user.links.length-1].url}
        shortUrl={user?.links[user.links.length-1].shortUrl}
        createdAt={user?.links[user.links.length-1].createdAt}
        clicks={user?.links[user.links.length-1].clicks}
        domain={user?.links[user.links.length-1].domain}
      />
      {JSON.stringify(user)}
    </div>
  )
}

export default Settings