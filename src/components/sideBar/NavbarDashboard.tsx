import { type User } from '../../Types.d'
import s from './NabarDashboard.module.css'
interface Props {
  user: User | null
}

const NavbarDashboard = ({user}: Props) => {
  return (
    <header className={s.container}>
      <h3>{user && user.name.slice(0,1)}</h3>
    </header>
  )
}

export default NavbarDashboard