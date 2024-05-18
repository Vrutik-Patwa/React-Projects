import React from "react";
import Header from "./Header";
import Content from "./Content";
const Card = () => {
  return (
    <div className="bg-card h-96 w-80 rounded-[24px] flex flex-col items-center">
      <Header />
      <Content />
    </div>
  );
};

export default Card;
