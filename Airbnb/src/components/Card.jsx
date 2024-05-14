import React from "react";

const Card = (props) => {
  return (
    <div className="ml-20 mt-10">
      <img src={props.img} alt="" className="h-64 rounded-xl w-56" />
      <div>
        <div className="mt-3 flex items-center">
          <img src="images/Star 1.png " alt="" />
          <span>{props.rating}</span>
          <span>({props.reviews})</span>
          <span>.</span>
          <span>{props.country}</span>
        </div>
        <p className="mt-1">{props.title}</p>
        <p>
          <span className="font-bold">From ${props.price} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
