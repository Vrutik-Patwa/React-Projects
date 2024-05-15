import React from "react";
import "../index.css";
const Header = () => {
  return (
    <div className="liner-gradient-header flex text-white font-bold text-[20px] py-[15px] px-[20px] items-center box-border gap-4 w-full h-[65px]">
      <img src="images/TrollFace.png" alt="" className="h-[26px] ml-10" />
      <div>Meme Generator</div>
    </div>
  );
};

export default Header;
