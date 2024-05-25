import React from "react";

const Sidebar = (props) => {
  const noteElements = props.note.map((note, index) => {
    return (
      <div key={note.id}>
        <div
          className={p-5 w-full bg-button}  
     onClick={() => props.setCurrentNoteId(note.id)}
        >
          <h4 className="text-white font-semibold text-md">Note {index + 1}</h4>
          {console.log(note, index)}
        </div>
      </div>
    );
  });
  return (
    <div className="h-screen bg-white">
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
