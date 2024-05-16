import React from "react";
import "../index.css";
const Header = () => {
  return (
    <div className="liner-gradient-header flex text-white w-full h-[65px] items-center font-bold">
      <img
        src="images/TrollFace.png"
        alt=""
        className="w-[31px] h-[26px] ml-6"
      />
      <div className="w-[140px] h-[24px] ml-2">Meme Generator</div>
      <div className="font-normal ml-36">React Course - Project 3</div>
    </div>
  );
};

export default Header;
