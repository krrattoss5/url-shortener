import { type Urls } from "../../Types.d";
import { getFavicon } from "../../constants"
import { CalendarIcon, ClipBoardIcon, OrbIcon, ShareIcon, UpdateIcon } from "../icons"
import s from './index.module.css'

interface Props {
  link: Urls
}

const Card = ({link}: Props) => {
  const handleClipboard = () => navigator.clipboard.writeText(`http://localhost:3001/${link.shortUrl}`);

  return (
    <div className={s.cardContainer}>

      <div className={s.cardLeft}>

        <div className={s.imageContainer}>
          <img src={getFavicon + link.domain} alt="" />
        </div>

        <div>
          <h2 className={s.cardTitle}>{link.name?.length < 1 ? 'untitled' : link.name}</h2>
          <a className={s.shorted} target="blanc" href={`http://localhost:3001/${link.shortUrl}`}>{`http://localhost:3001/${link.shortUrl}`}</a>
          <a className={s.url} target="blanc" href={link.url}>{link.url}...</a>

          <div className={s.tagsContainer}>
            <span><OrbIcon />{link.clicks}engagements</span>
            <span><CalendarIcon />{link.createdAt && link.createdAt.slice(0,10).split('-').reverse().join('/')}</span>
          </div>
        </div>

      </div>

      <div className={s.cardRight}>
        <button className={s.clipboard} onClick={handleClipboard}>
          <ClipBoardIcon /> Copy
        </button>
        <button className={s.buttons} onClick={handleClipboard}>
          <ShareIcon /> Share
        </button>
        <button className={s.buttons} onClick={handleClipboard}>
          <UpdateIcon />
        </button>
        {/* todo make icons: share, edit, options */}
      </div>

    </div>
  )
}

export default Card