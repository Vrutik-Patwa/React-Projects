import React from "react";

const Navbar = (props) => {
  return (
    <div className="flex h-[10%]  items-center" style={props.style}>
      <button onClick={props.theme}>
        <div className="text-2xl font-extrabold ml-10 ">LOGO</div>
      </button>
    </div>
  );
};

export default Navbar;
