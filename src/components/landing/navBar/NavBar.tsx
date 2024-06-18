import { Link } from "react-router-dom";
import s from './NavBar.module.css';
import { getOut } from "../../../constants";
import { useState, useEffect } from "react";

const NavBar = () => {
  const isLogin = !!localStorage.getItem('token');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`${s.container} ${isScrolled ? s.scrolled : ''}`}>
      <Link to='/'>
        <img src="/bitly_logo.svg" alt="bitly clone" />
      </Link>
      <div>
        {!isLogin
          ? <Link className={s.link} to='/iniciar-sesion'>
              Log in
            </Link>
          : <button className={s.link} onClick={getOut}>Get Out</button>}
        {!isLogin
          ? <Link className={s.link2} to='/crear-usuario'>
              Sign up Free
            </Link>
          : null
        }
      </div>
    </nav>
  );
}

export default NavBar;
