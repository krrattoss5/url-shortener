import { useState } from "react";
import { ConfigIcon, HomeIcon, LinkIcon, PlusIcon } from "../../icons.tsx";
import s from "./SideBar.module.css";
import NavigationLink from "./NavigationLink.tsx";
import ToggleButton from "./ToggleButton.tsx";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/dashboard/home", icon: <HomeIcon />, label: "Home" },
  { to: "/dashboard/links", icon: <LinkIcon />, label: "Links" },
  { to: "/dashboard/settings", icon: <ConfigIcon />, label: "Settings" },
];

const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => setIsToggle(!isToggle);

  return (
    <div className={`${s.container} ${isToggle ? s.selected : ""}`}>
      <section className={`${s.ContainerToggle} ${isToggle ? s.selected : ""}`}>
        <ToggleButton isToggle={isToggle} handleIsToggle={handleIsToggle} />

        <Link to="/dashboard/home">
          <img src="/favicon.ico" alt="favicon" className={s.favicon} />
        </Link>

        <Link to="/dashboard/links/create">
          <button
            className={`${s.buttonOnToggle} ${isToggle ? s.selected : ""}`}
          >
            {isToggle ? <PlusIcon /> : "Create new"}
          </button>
        </Link>

        {NAV_LINKS.map((link) => (
          <NavigationLink
            key={link.to}
            to={link.to}
            icon={link.icon}
            label={link.label}
            isToggle={isToggle}
          />
        ))}
      </section>
    </div>
  );
};

export default SideBar;
