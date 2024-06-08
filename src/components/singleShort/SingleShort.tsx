import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const SingleShort = () => {
  const shortId = useLocation().pathname
  const [url, setURL] = useState<string | null>('')

  useEffect(() => {
    fetch(`http://localhost:3001${shortId}`)
      .then(res => res.json())
      .then(data => setURL(data))
      .catch((error) => console.log({message: error.message}))

      url
        ? window.location.href = url
        : null

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      {url
        ? window.location.href = url
        : null}
    </div>
  )
}

export default SingleShort