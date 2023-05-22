import React, {useContext} from 'react'
import NoteContext from "../context/notes/NoteContext";


function NoteItem(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context; // importing context for deleting the context
    const { note, updateNotes, showalert} = props;
    return (
        <div className='row col-md-3 mx-0'>
            <div className="card my-3 mx">
                    <div className="card-body my-2">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-pen-to-square" onClick={() => {updateNotes(note)}}></i>
                        {/* Running deleteNote function and showing alert */}
                        <i className="fa-solid fa-trash mx-4" onClick={() => {deleteNote(note._id); props.showalert("Note Deleted Successfully", "success")}}></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
