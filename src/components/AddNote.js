import React, {useContext, useState} from "react";
import NoteContext from "../context/notes/NoteContext";

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context; // Destructuring in the notecontext context as it has passed two values

  const [note, setnote] = useState({title: "", description: "", tag: "default"});// using useState hook for the note add

  // handling the event when a note is submitted
  const handleNoteAdd = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag); // running addnote function and giving it title description and tag through note state
  };

  const onChange = (e) => {
    setnote({...note, [e.target.name]: e.target.value}) // this will set the value in the note as you enter a note in the input tags
  }

  return (
    // here you have set the id and name of the input tags according to the label name link Title and Description
    <div>
      <div className="container col-md-10 my-3">
        <h1>Add Note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange} // handling the change event of the input tag(if it is filled)
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleNoteAdd}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
