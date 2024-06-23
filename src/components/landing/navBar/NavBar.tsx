import { Link } from "react-router-dom";
import s from "./NavBar.module.css";
import { useState, useEffect } from "react";
import MenuMobile from "./MenuMobile";

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      setTimeout(() => {
        document.querySelector(`.${s.container}`)?.classList.add(s.transition);
      }, 0);
    } else {
      document.querySelector(`.${s.container}`)?.classList.remove(s.transition);
    }
  }, [isScrolled]);

  return (
    <nav className={`${s.container} ${isScrolled ? s.scrolled : ""}`}>
      <Link to="/">
        <img src="/bitly_logo.svg" alt="bitly clone" />
      </Link>
      <div>
        <Link className={s.link} to="/iniciar-sesion">
          Log in
        </Link>

        <Link className={s.link2} to="/crear-usuario">
          Sign up Free
        </Link>
        <MenuMobile />
      </div>
    </nav>
  );
};

export default NavBar;
