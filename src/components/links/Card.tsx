import { getFavicon } from "../../constants"

const Card = ({name,id,url,shortUrl,createdAt,clicks,domain}) => {
  return (
    <div>
      <img src={getFavicon + domain} alt="" />
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{url}</h2>
      <h2>{shortUrl}</h2>
      <h2>{createdAt}</h2>
      <h2>{clicks}</h2>
      <h2>{domain}</h2>
    </div>
  )
}

export default Card