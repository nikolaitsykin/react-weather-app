import classes from "./switch.module.css";

export function Switch({ toggle, handleToggleChange }) {
  const toggleStyle = "w-[60px] h-[30px] bg-[#50505126] relative rounded-lg grid mr-1"
  const toggleBtnStyle = `${classes.toggle_btn} ${!toggle ? classes.disable : ""}`;
  const toggleSwitch = toggle ? "°C" : "°F";

  return (
    <div
      className={toggleStyle}
      onClick={handleToggleChange}
>
      <div className={toggleBtnStyle}>{toggleSwitch}</div>
    </div>
  );
}
