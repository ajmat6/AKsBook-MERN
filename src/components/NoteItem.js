import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='row col-md-3 mx-0'>
            <div className="card my-3 mx">
                    <div className="card-body my-2">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-pen-to-square"></i>
                        <i className="fa-solid fa-trash mx-4"></i>
                    </div>
            </div>
        </div>
    )
}

export default NoteItem
