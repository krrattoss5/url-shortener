import { type Urls } from "../../../Types"
import Cards from "./Cards.tsx"
import s from '../Dashboard.module.css'

interface Props {
  links: Urls[] | null
}

const Links = ({links}: Props) => {
  console.log(links)
  if(links && links?.length < 1){
    links = null
  }
  return (
    <div className={s.containerSection} >
      {links
        ? <h1 className={s.title}>Bitly Clone Links</h1>
        : <img src="/links-list-empty.png" alt="links-list-empty" />}
      {links && <Cards links={links} />}
    </div>
  )
}

export default Links