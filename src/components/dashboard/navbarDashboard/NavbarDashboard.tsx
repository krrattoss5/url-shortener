import { useState } from 'react'
import { type User } from '../../../Types'
import { DropDownIcon } from '../../icons'
import AvatarMain from './AvatarMain'
import s from './NabarDashboard.module.css'
import { getOut } from '../../../constants'

interface Props {
  user: User | null
}

const NavbarDashboard = ({user}: Props) => {
  const [isModalVisible, setIsModalvisible] = useState(false)

  const handleFocus = () => setIsModalvisible(!isModalVisible)

  return (
    <header className={s.container}>
      <button
        className={s.mainMenu}
        onClick={handleFocus}
      >
        <AvatarMain user={user} />
        <span>{user?.name}</span>
        <DropDownIcon />
      </button>

      <div className={`${s.userModal} ${isModalVisible ? s.visible : ''}`}>
        <div className={s.header}>

          <AvatarMain user={user} />
          <div className={s.data}>
            <span>{user?.name}</span>
            <span>{user?.email}</span>
          </div>

        </div>

        <span onClick={getOut} className={s.option}>Log out</span>

      </div>

    </header>
  )
}

export default NavbarDashboard