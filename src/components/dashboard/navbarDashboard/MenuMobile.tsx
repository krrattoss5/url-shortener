import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Menu.module.css";
import {
  ConfigIcon,
  HomeIcon,
  LinkIcon,
  MenuClose,
  MenuIcon,
} from "../../icons";
import NavigationLink from "../sideBar/NavigationLink";

const NAV_LINKS = [
  { to: "/dashboard/home", icon: <HomeIcon />, label: "Home" },
  { to: "/dashboard/links", icon: <LinkIcon />, label: "Links" },
  { to: "/dashboard/settings", icon: <ConfigIcon />, label: "Settings" },
];

const MenuMobile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => setIsToggle(!isToggle);

  return (
    <>
      <span className={s.containerMenu} onClick={handleToggle}>
        {isToggle ? <MenuClose /> : <MenuIcon />}
      </span>

      <Link to="/dashboard/home">
        <img src="/favicon.ico" alt="favicon" className={s.favicon} />
      </Link>

      {isToggle ? (
        <nav className={s.menuToggle}>
          <Link to="/dashboard/links/create">
            <span onClick={handleToggle} className={s.buttonOnToggle}>Create new</span>
          </Link>

          {NAV_LINKS.map((link) => (
            <NavigationLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isToggle={false}
              handleToggle={handleToggle}
            />
          ))}
        </nav>
      ) : null}
    </>
  );
};

export default MenuMobile;
