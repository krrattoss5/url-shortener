import { MinusTo, PlusToIcon } from "../../icons";
import s from './SideBar.module.css';

interface Props {
  isToggle: boolean
  handleIsToggle: () => void
}

const ToggleButton = ({ isToggle, handleIsToggle }: Props) => {
  return (
    <button onClick={handleIsToggle} className={isToggle ? s.buttonToggleOf : s.buttonToggleOn}>
      {isToggle ? <PlusToIcon /> : <MinusTo />}
    </button>
  );
};

export default ToggleButton;
