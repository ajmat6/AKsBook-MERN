import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const notecontext = useContext(NoteContext);
  const { notes, fetchNote, editNote } = notecontext; // Destructuring in the notecontext context as it has passed two values
  useEffect(() => {
    fetchNote(); // calling the fetch notes function once
    // eslint-disable-next-line
  }, [])

  const ref = useRef(null); // useRef hook is used to take reference of a particular element (here setting the initial value of it as null)
  const refClose = useRef(null);

  const [note, setnote] = useState({id: "", etitle: "", edescription: "", etag: ""});// here to make modal title, description and tag different from that of adding one, you had given name of their input tag as etitle, edescription and etag
  const updateNotes = (currentNote) => {
    console.log("Update note is clicked")
    ref.current.click(); // will toggle the modal -> it will hide it if it is showing and will show it if it is hidden
    setnote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }



  // handling the event when a note is submitted
  const handleUpdate = (e) => {
    console.log("update button clicked and note is getting updated")
    editNote(note.id, note.etitle, note.ediscription, note.etag);
    // refClose.current.click();
  };

  const onChange = (e) => {
    setnote({...note, [e.target.name]: e.target.value}) // this will set the value in the note as you enter a note in the input tags
  }

  return (
    <>
      <AddNote />

      {/* Edit Modal for the note */}
      {/* Passing ref to this button for the toggling of the modal */}
      {/* d-none sets display as none in bootstrap */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle} // it will show alredy filled details in the modal that will open
                    aria-describedby="emailHelp"
                    //   handling the change event of the input tag(if it is filled)
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription" // name is used to reference an element 
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" ref={refClose} data-bs-dismiss="modal" onClick={handleUpdate}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <h1 className="my-3">Your Notes</h1>
          {notes.map((note) => {
            // mapping of the notes and sending it as a prop to NoteItem component
            // passing updateNote modal as a prop to the NoteItem component
            return <NoteItem key={note._id} updateNotes={updateNotes} note={note} />
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
