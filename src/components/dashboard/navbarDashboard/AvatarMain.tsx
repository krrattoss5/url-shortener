import { type User } from "../../../Types.d";
import s from "./NabarDashboard.module.css";

interface Props {
  user: User | null;
}

const AvatarMain = ({ user }: Props) => {
  const data = localStorage.getItem("data-user") as string;
  const parsed: User | null = JSON.parse(data);

  return (
    <span className={s.avatar}>
      {" "}
      {user ? user.name.slice(0, 1) : parsed?.name.slice(0, 1)}
    </span>
  );
};

export default AvatarMain;
