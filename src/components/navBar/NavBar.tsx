import { Link } from "react-router-dom"
import s from './NavBar.module.css'
import { getOut } from "../../constants"

const NavBar = () => {
  const isLogin = !!localStorage.getItem('token')

  return (
    <nav className={s.container}>
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
              Sigin up Free
            </Link>
          : null
        }
      </div>
    </nav>
  )
}

export default NavBar