import React from "react";
import Header from "./Header";
import Meme from "./Meme";
const Display = (props) => {
  return (
    <div className="bg-white h-[550px] flex flex-col w-[550px] mt-20">
      <Header />
      <Meme func={props.func} />
    </div>
  );
};

export default Display;
