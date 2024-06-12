import { useState } from "react";
import { ConfigIcon, HomeIcon, LinkIcon, PlusIcon } from "../icons";
import s from './SideBar.module.css';
import NavigationLink from './NavigationLink.tsx';
import ToggleButton from './ToggleButton.tsx';

const NAV_LINKS = [
  { to: '/dashboard/home', icon: <HomeIcon />, label: 'Home' },
  { to: '/dashboard/links', icon: <LinkIcon />, label: 'Links' },
  { to: '/dashboard/settings', icon: <ConfigIcon />, label: 'Settings' }
];

const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleIsToggle = () => setIsToggle(!isToggle);

  return (
    <div style={{ width: isToggle ? '5%' : '19%' }} className={s.container}>
      <section className={s.ContainerToggle}>
        <ToggleButton isToggle={isToggle} handleIsToggle={handleIsToggle} />

        <img src="/favicon.ico" alt="favicon" className={s.favicon} />

        <button className={isToggle ? s.buttonOnToggle : s.buttonNoToggle}>
          {isToggle ? <PlusIcon /> : 'Create new'}
        </button>

        {NAV_LINKS.map(link => (
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
