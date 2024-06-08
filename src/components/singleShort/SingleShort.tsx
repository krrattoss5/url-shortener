import { useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleShort = () => {
  const {shortId} = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/${shortId}`)
      .then(res => res.json())
      .then(data => {
        data
        ? window.location.href = data
        : null
      })
      .catch((error) => console.log({message: error.message}))

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  console.log(shortId)

  return (
    <div>
    </div>
  )
}

export default SingleShort