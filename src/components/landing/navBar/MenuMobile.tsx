import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Menu.module.css";
import { MenuClose, MenuIcon } from "../../icons";

const MenuMobile = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => setIsToggle(!isToggle);

  return (
    <>
      <span className={s.containerMenu} onClick={handleToggle}>
        {isToggle ? <MenuClose /> : <MenuIcon />}
      </span>

      {isToggle ? (
        <nav className={s.menuToggle}>
          <Link className={s.link} to="/iniciar-sesion">
            Log in
          </Link>
          <Link className={s.link} to="/crear-usuario">
            Sign up Free
          </Link>
        </nav>
      ) : null}
    </>
  );
};

export default MenuMobile;
