import Split from "react-split";
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setnewNotes] = useState([]);

  function addnewNote(e) {
    // e.preventDefault();
    const newNote = {
      id: nanoid(),
      body: "#Write Something Here",
    };
    setnewNotes((prevState) => {
      return [newNote, ...prevState];
    });

    console.log(notes);
  }
  return (
    <main className="h-screen bg-back">
      {notes.length > 0 ? (
        <Split
          className="flex"
          // Its Basically a dependency in react use to create a grid like layout
          sizes={[30, 70]}
          direction="horizontal"
        >
          <Sidebar newNote={addnewNote} />
          <Editor />
        </Split>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-semibold ">You have no notes</h1>
          <button
            className="text-xl mt-6 p-3 rounded-md bg-but text-white"
            onClick={() => addnewNote()}
          >
            Create one new
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
