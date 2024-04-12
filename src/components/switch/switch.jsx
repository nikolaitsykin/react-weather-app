import classes from "./switch.module.css";

export function Switch({ toggle, handleToggleChange }) {
  return (
    <div
      className="w-[60px] h-[30px] bg-[#50505126] relative rounded-lg grid mr-1"
      onClick={handleToggleChange}
    >
      <div
        className={`${classes.toggle_btn} ${!toggle ? classes.disable : ""}`}
      >
        {toggle ? "°C" : "°F"}
      </div>
    </div>
  );
}
