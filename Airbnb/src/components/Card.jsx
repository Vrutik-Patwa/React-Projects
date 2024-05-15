import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.item.openspots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.country === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="ml-20 mt-10 relative">
      {badgeText && (
        <div className="absolute p-1.5 ml-3 mt-3 bg-white font-semibold rounded-md">
          {badgeText}
        </div>
      )}
      {/* We can do it using javascript if and else */}
      {/* This is an alternative using logical and operator */}
      {/* It is basic use of and operator the thing is if the first condition is true then only the code will check for second condition and hence run the div or else if first condition is false it wont check for second condition */}
      <img
        src={`images/${props.item.img}`}
        alt=""
        className="h-64 rounded-xl w-56"
      />

      {/* Basically using Template String and dollar sign to se javasript code */}
      {/* We are directly calling image as it is in public folder */}
      <div>
        <div className="mt-3 flex items-center">
          <img src="images/Star 1.png " alt="" />
          <span>{props.item.rating}</span>
          <span>({props.item.reviews})</span>
          <span>.</span>
          <span>{props.item.country}</span>
        </div>
        <p className="mt-1">{props.item.title}</p>
        <p>
          <span className="font-bold">From ${props.item.price} </span>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
