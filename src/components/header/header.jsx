import { useState } from "react";
import { ReactComponent as ListIcon } from "../../icons/list.svg";
import { IMPERIAL, METRIC } from "../../utils/data";
import { Switch } from "../switch/switch";

export function Header({ setUnits, isFavShowed, setIsFavShowed }) {
  const [toggle, setToggle] = useState(false);
  const [isUnitMetric, setIsUnitMetric] = useState(false);
  const handleUnitsChange = () => {
    setIsUnitMetric(!isUnitMetric);
    setToggle(!toggle);
    setUnits(isUnitMetric ? IMPERIAL : METRIC);
  };

  const handleClick = () => {
    setIsFavShowed(!isFavShowed);
  };

  const listButtonStyle =
    "h-[30px] w-[30px] flex justify-center bg-[#50505133] hover:bg-[#8e9ddb80] rounded-lg";
  const logoStyle =
    "text-2xl text-white font-medium-white flex items-end mr-2 cursor-pointer";
    
  return (
    <header className="w-full mb-2">
      <div className="flex h-8 flex-row justify-between">
        <div className={logoStyle}>Your Weather</div>
        <div className="flex w-21 ">
          <Switch
            isUnitMetric={isUnitMetric}
            toggle={toggle}
            handleToggleChange={handleUnitsChange}
          />
          <button className={listButtonStyle} onClick={handleClick}>
            <ListIcon className="h-[30px] flex self-center" />
          </button>
        </div>
      </div>
    </header>
  );
}
