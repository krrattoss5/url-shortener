import { useState } from "react";
import { type User } from "../../../Types";
import { DropDownIcon } from "../../icons";
import AvatarMain from "./AvatarMain";
import s from "./NabarDashboard.module.css";
import { getOut } from "../../../constants";
import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";

interface Props {
  user: User | null;
}

const NavbarDashboard = ({ user }: Props) => {
  const [isModalVisible, setIsModalvisible] = useState(false);

  const handleFocus = () => setIsModalvisible(!isModalVisible);

  const data = localStorage.getItem("user") as string;
  const parsed: User | null = JSON.parse(data);


  return (
    <header className={s.container}>
      <MenuMobile />
      <button className={s.mainMenu} onClick={handleFocus}>
        <AvatarMain user={user} />
        <span className={s.span}>{user ? user?.name : parsed?.name}</span>
        <DropDownIcon />
      </button>

      <div className={`${s.userModal} ${isModalVisible ? s.visible : ""}`}>
        <Link to="/dashboard/settings">
          <div className={s.header}>
            <AvatarMain user={user} />
            <div className={s.data}>
              <span>
                {user ? user?.name : parsed?.name} {user ? user?.lastname : parsed?.lastname}
              </span>
              <span>{user ? user?.email : parsed?.name}</span>
            </div>
          </div>
        </Link>

        <span onClick={getOut} className={s.option}>
          Log out
        </span>
      </div>
    </header>
  );
};

export default NavbarDashboard;
