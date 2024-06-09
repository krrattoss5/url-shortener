import { Link } from "react-router-dom"
import s from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={s.container}>
      <Link to='/'>
        <img src="/bitly_logo.svg" alt="bitly clone" />
      </Link>
      <div>
        <Link className={s.link} to='/iniciar-sesion'>
          Log in
        </Link>
        <Link className={s.link2} to='/crear-usuario'>
          Sigin up Free
        </Link>
      </div>
    </nav>
  )
}

export default NavBar