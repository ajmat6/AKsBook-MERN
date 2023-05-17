import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
    const notecontext = useContext(NoteContext);
    const {notes, fetchNote} = notecontext; // Destructuring in the notecontext context as it has passed two values
    useEffect(() => {
      fetchNote(); // calling the fetch notes function once
    }, [])
    
  return (
    <>
    <AddNote />
    <div>
        <div className="row">
            <h1 className="my-3">Your Notes</h1>
            {notes.map((note) => {
                // mapping of the notes and sending it as a prop to NoteItem component
                return <NoteItem key={note._id} note={note}/>
            })}
        </div>
    </div>
    </>
  );
}

export default Notes;
