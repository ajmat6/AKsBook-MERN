import React , {useState} from "react";
import NoteContext from "./NoteContext"; // importing noteContext context

const NoteState = (props) => {
    const host = "http://localhost:5001";
    const Notes = []; // initial Notes array is empty

      const [notes,setnotes] = useState(Notes) // setting the initial state as our hardcord above notes

      //fetch all notes a note:
      const fetchNote = async () => { // note will take title, description and tag. All the other things will happen by iteself like user(send through header) and date etc
        // API call to add the note in the backend
        //see fetch API notes
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          // setting headers as content-type and auth-token required by the update endpoint in backend
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
          },
        });
        const json = await response.json(); // will parse the value as json

        //logic to delete a note in frontend
        console.log("fetching note");
        console.log(json);
        setnotes(json);
      }


      //Add a note:
      const addNote = async (title, description, tag) => { // note will take title, description and tag. All the other things will happen by iteself like user(send through header) and date etc
        // API call to add the note in the backend
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          // setting headers as content-type and auth-token required by the add endpoint in backend
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
          },
          body: JSON.stringify({title, description, tag}),
        });

        //logic to add a note in frontend
        console.log("adding note");
        const note = await response.json(); // will parse the value as json
        console.log(note);
        setnotes(Notes.concat(note));// concat returns an array after adding and push updates an array. It will give error in the notes.map if push function is used.
        fetchNote();
      }


      //Delete a note:
      const deleteNote = async (id) => {
        // API call to delete the note in the backend
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          // setting headers as content-type and auth-token required by the delete endpoint in backend
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
          },
        });

        //logic to delete a note
        console.log("Deleting note with id " + id);
        const newNotes = notes.filter((note) => {return note._id !== id}); // filtering the note which you want to delete
        setnotes(newNotes);

        const json = await response.json();
        console.log(json);
      }

      //Edit a note:
      const editNote = async (id, title, description, tag) => {
        // API call to edit the note in the backend
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",
            // setting headers as content-type and auth-token required by the edit endpoint in backend
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const json = response.json(); // will parse the value as json
          // console.log(json);

          fetchNote();

          const newNotes = JSON.parse(JSON.stringify(Notes)); // this is used to make a deep copy of the Notes array object so that below 

        //logic to edit a note in frontend
        for (let index = 0; index < newNotes.length; index++) {
          // const element = Notes[index];
          if(newNotes[index]._id === id)
          {
            newNotes[index].title =  title;
            newNotes[index].description =  description;
            newNotes[index].tag =  tag;
            break;
          }
        }
        setnotes(newNotes);
      }

    return(
        // you can pass the value of this state using value keyword and using overall below syntax
        // <NoteContext.Provider value={{info,updateInfo}}>   // for passing two values
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, fetchNote}}> 
            {/* Anything  that in this block will have access to this context values. Here you passed it to all the children means all props */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; // exporting NoteState State