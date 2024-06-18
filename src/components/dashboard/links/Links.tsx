import { type Urls } from "../../../Types";
import Cards from "./Cards.tsx";
import s from "../Dashboard.module.css";
import Loading from "../../Loading.tsx";

interface Props {
  links: Urls[] | null;
}

const Links = ({ links }: Props) => {
  if (links && links?.length < 1) {
    links = null;
  }
  return (
    <div className={s.containerSection}>
      {!links ? (
        <Loading />
      ) : links.length > 0 ? (
        <h1 className={s.title}>Bitly Clone Links</h1>
      ) : (
        <img src="/links-list-empty.png" alt="links-list-empty" />
      )}
      {links && <Cards links={links} />}
    </div>
  );
};

export default Links;
