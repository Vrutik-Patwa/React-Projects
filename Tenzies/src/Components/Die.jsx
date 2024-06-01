import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
    // color: props.isHeld ? "white" : "black",
  };

  return (
    <div
      //   key={props.key}
      className="text-black  rounded-2xl w-fit h-fit font-bold text-4xl shadow-2xl p-6 px-7"
      style={styles}
      onClick={props.holdDice}
    >
      {props.number}
    </div>
  );
};

export default Die;
