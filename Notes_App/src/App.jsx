import { useState } from "react";
import Split from "react-split";
import { nanoid } from "nanoid";
import Sidebar from "./Components/Sidebar";
import Editor from "./Components/Editor";

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );
  // Basically an id to refer to currentNotes and if it is not then notes[0] that is notes 1 and if not present  it will return ""(due to || Operator)
  function createNewNote() {
    const newNote = {
      id: nanoid(), //Give each note an id to refer to
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }
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
          <Sidebar addnewnote={createNewNote} note={notes} />
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
