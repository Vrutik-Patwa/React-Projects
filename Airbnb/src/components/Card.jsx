import React from "react";

const Card = () => {
  return (
    <div className="ml-20 mt-10">
      <img src="images/image 12.png" alt="" />
      <div>
        <div className="mt-3 flex items-center">
          <img src="images/Star 1.png " alt="" />
          <span>5.0</span>
          <span>(6)</span>
          <span>.</span>
          <span>USA</span>
        </div>
        <p className="mt-1">Life Lessons with Katie Zaferes</p>
        <p>
          <span className="font-bold">From $136 </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
