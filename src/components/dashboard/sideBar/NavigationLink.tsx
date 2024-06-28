import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css";
import { ReactNode } from "react";

interface Props {
  to: string;
  icon: ReactNode;
  label: string;
  isToggle: boolean;
  handleToggle: ()=>void
}

const NavigationLink = ({ to, icon, label, isToggle, handleToggle = ()=>{} }: Props) => {
  return (
    <NavLink
      to={to}
      key={label}
      className={({ isActive }) => {
        if (isToggle)
          return isActive
            ? `${s.noToggleActive} ${s.selected}`
            : `${s.noToggle} ${s.selected}`;

        if (!isToggle) return isActive ? s.noToggleActive : s.noToggle;
      }}
      onClick={handleToggle}
    >
      <span>|</span>
      {icon}
      {!isToggle && <h4>{label}</h4>}
    </NavLink>
  );
};

export default NavigationLink;
