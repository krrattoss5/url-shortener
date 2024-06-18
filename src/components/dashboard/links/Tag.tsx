import s from "./index.module.css";

interface Props {
  title: string;
  value: number;
}

const Tag = ({ title, value }: Props) => {
  return (
    <div className={s.tagContainer}>
      <h5>{title}</h5>
      <span>{value}</span>
    </div>
  );
};

export default Tag;
