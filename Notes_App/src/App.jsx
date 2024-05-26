import { useEffect, useState } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  // The issue with this is that suppose if any other state changed react will rerender the App component which will render the notes which is not good so we use lazy state initialization
  // JSON.parse to convert it from string to arr
  // Basically getting notes and if they exist on local storage it will return that else an empty array
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  // Basically an id to refer to currentNotes and if it is not then notes[0] that is notes 1 and if not present  it will return ""(due to || Operator)

  // const [state, setState] = useState(console.log("state renders"));
  // Since this take too Little time it doesn't matter however for expensive actions like getting data from local storage we use lazy evaluation it just basically means use an arrow functions inside use state so it only renders the initialization once

  const [state, setState] = useState(() => {
    console.log("state rendered");
  });

  // This will lead to only once rendering the state variable
  function createNewNote() {
    const newNote = {
      id: nanoid(), //Give each note an id to refer to
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }
  // This updates the notes but doesn't bring it to the top
  // So now lets try to do tht
  function updateNote(text) {
    // setNotes((oldNotes) =>
    //   oldNotes.map((oldNote) => {
    //     return oldNote.id === currentNoteId
    //       ? { ...oldNote, body: text }
    //       : oldNote;
    //   })
    // );
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        if (oldNotes[i].id === currentNoteId) {
          newArray.unshift({ ...oldNotes[i], body: text });
        } else {
          newArray.push(oldNotes[i]);
        }
      }
      return newArray;
    });
    const newArray = [];

    /*Pseudo Code 
    1.create new empty array
    2.iterate over old notes
    2.if the oldnotesid matches the current node id then push the node and put it at top
    3.else push the old note
*/
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }
  // setting item to local storage using useeffect so it only renders when notes changes
  // in storgage we cannot insert complex structures like json so we change it to string
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <main>
      {/* Basically seeing if notes are present then Render this block */}
      {notes.length > 0 ? (
        // Split acts like Grid Layout just an dependency to make it easy
        <Split
          sizes={[20, 80]}
          direction="horizontal"
          className="flex bg-back h-screen"
        >
          <Sidebar
            addnewnote={createNewNote}
            note={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
          />
          <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
        </Split>
      ) : (
        <div className="flex flex-col gap-7 justify-center items-center h-screen w-screen">
          <h1 className="font-bold text-3xl">You have no notes</h1>
          <button
            onClick={createNewNote}
            className="font-normal text-xl text-white bg-button p-4 rounded-md shadow-2xl"
          >
            Create one new
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
