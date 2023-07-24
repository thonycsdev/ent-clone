import React from "react";
import {
  BsCoin,
  BsFillLightningChargeFill,
  BsFillStarFill,
} from "react-icons/bs";
import IconValue from "../icon";
const Header: React.FC = () => {
  return (
    <div className="h-28 bg-orange-400 flex flex-col items-center pt-2">
      <div className="h-1/2">LookPalloma</div>
      <div className="flex justify-around h-1/2 w-full">
        <IconValue iconComponent={<BsCoin />} value={0} />
        <IconValue iconComponent={<BsFillLightningChargeFill />} value={0} />
        <IconValue iconComponent={<BsFillStarFill />} value={0} />
      </div>
    </div>
  );
};

export default Header;
