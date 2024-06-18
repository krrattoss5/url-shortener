import { useParams } from "react-router-dom";
import s from "../Dashboard.module.css";
import { type Data, type Country, type Urls } from "../../../Types.d";
import Card from "./Card";
import DynamicPieChart from "./DynamicPieChart";
import Tag from "./Tag";

interface Props {
  links: Urls[] | null;
  countries: Country[] | null;
}

const SingleLink = ({ links, countries }: Props) => {
  const { id } = useParams();
  const linkFiltered: Urls[] | null =
    links && links.filter((link) => link.id.toString() === id);
  const link: Urls | null = linkFiltered && linkFiltered[0];

  const dataAnalytics: Data[] = [];
  countries &&
    link?.linkCountries.forEach((c) => {
      for (let i = 0; i < countries.length; i++) {
        if (c.countryId === countries[i].id) {
          dataAnalytics.push({
            name: countries[i].name,
            value: c.visits,
          });
        }
      }
    });

  return link ? (
    <div className={s.containerSection}>
      <h1 className={s.title}>Bitly Clone Links</h1>
      <Card link={link} />

      <section className={s.dataAnalytics}>
        <div style={{ background: "none" }} className={s.containerTags}>
          <Tag title="Engagements" value={link.clicks} />
          <Tag title="Countries" value={dataAnalytics.length} />
        </div>

        <DynamicPieChart data={dataAnalytics} />
      </section>
    </div>
  ) : null;
};

export default SingleLink;
