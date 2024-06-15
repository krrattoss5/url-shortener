import { type Urls } from "../../../Types"
import Cards from "./Cards.tsx"
import s from '../Dashboard.module.css'

interface Props {
  links: Urls[] | null
}

const Links = ({links}: Props) => {
  return (
    <div className={s.containerSection} >
      <h1 className={s.title}>Bitly Clone Links</h1>
      {links && <Cards links={links} />}
    </div>
  )
}

export default Links