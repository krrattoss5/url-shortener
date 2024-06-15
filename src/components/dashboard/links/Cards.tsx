import { type Urls } from "../../../Types"
import Card from "./Card"

interface Props {
  links: Urls[] | null
}

const Cards = ({links}: Props) => {
  return (
    <>
      {links && links.map((link) => <Card link={link} />).reverse()}
    </>
  )
}

export default Cards