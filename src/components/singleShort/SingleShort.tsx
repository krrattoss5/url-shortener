import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const SingleShort = () => {
  const shortId = useLocation().pathname

  useEffect(() => {
    fetch(`http://localhost:3001/${shortId}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
    </div>
  )
}

export default SingleShort