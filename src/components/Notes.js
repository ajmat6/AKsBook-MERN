import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";

function Notes() {
    const notecontext = useContext(NoteContext);
    const {notes, setnotes} = notecontext; // DEstructuring in the notecontext context as it has passed two values
  return (
    <div>
        <div className="row">
            <h1 className="my-3">Your Notes</h1>
            {notes.map((note) => {
                // mapping of the notes and sending it as a prop to NoteItem component
                return <NoteItem note={note}/>
            })}
        </div>
    </div>
  );
}

export default Notes;
