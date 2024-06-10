import { useState } from "react"
import { ConfigIcon, HomeIcon, LinkIcon, MinusTo, PlusIcon, PlusToIcon } from "../icons"
import s from './SideBar.module.css'

const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false)

  const handleIsToggle = () => setIsToggle(!isToggle)

  return (
    <div style={{width: `${!isToggle ? '18%' : '5%'}`}} className={s.container}>

      <section className={s.ContainerToggle}>

        <button onClick={handleIsToggle} className={isToggle ? s.buttonToggleOf : s.buttonToggleOn}>{!isToggle ? <MinusTo /> : <PlusToIcon />}</button>

        <img src="/favicon.ico" alt="fabicon" />

        <button className={!isToggle ? s.buttonNoToggle : s.buttonOnToggle}>
          {!isToggle ? 'Create new' : <PlusIcon />}
        </button>

        <span className={s.separator} ></span>

        <div className={s.noToggle}>
          <span></span>
          <HomeIcon />
          {!isToggle && <span>Home</span>}
        </div>

        <div className={s.noToggle}>
          <span></span>
          <LinkIcon />
          {!isToggle && <span>Links</span>}
        </div>

        <div className={s.noToggle}>
          <span></span>
          <ConfigIcon />
          {!isToggle && <span>Settings</span>}
        </div>

        <span className={s.separator} ></span>

      </section>

    </div>
  )
}

export default SideBar