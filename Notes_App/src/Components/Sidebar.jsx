import React from "react";
import { MdDelete } from "react-icons/md";
const Sidebar = (props) => {
  const noteElements = props.note.map((note, index) => {
    return (
      <div key={note.id}>
        <div
          className={`cursor-pointer flex w-full flex-row justify-between title ${
            note.id === props.currentNote.id
              ? "bg-button text-white font-bold"
              : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h4 className="py-[20px] px-[8px] text-[0.8rem] font-semibold text-md">
            {note.body.split("\n")[0]}
          </h4>
          {/* {console.log(note, index)} */}
          <button
            className="mr-8 delete-btn"
            onClick={(event) => props.deleteNode(event, note.id)}
          >
            <MdDelete className="" />
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="h-screen bg-white hide-scrollbar">
      <div className="flex flex-row justify-center gap-6 mt-20">
        <h3 className="text-3xl font-semibold">Notes</h3>
        <button
          className="bg-button text-white rounded-md px-4 aspect-square text-lg"
          onClick={props.addnewnote}
        >
          +
        </button>
      </div>
      <div className="mt-5">{noteElements}</div>
      {/* {console.log(noteElements)}
      {console.log(props.note)} */}
    </div>
  );
};

export default Sidebar;
