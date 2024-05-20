import React from "react";

const Sidebar = (props) => {
  const noteElements = props.notes.map();
  return (
    <div className="bg-white flex w-full flex-col shadow-2xl">
      <div className="font-semibold flex flex-row justify-evenly mt-5">
        <h2 className="text-3xl">Notes</h2>
        <button
          className="bg-but rounded-sm px-2 pb-1 text-3xl flex justify-center items-center text-white"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
