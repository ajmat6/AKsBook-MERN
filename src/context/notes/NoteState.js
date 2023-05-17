import React , {useState} from "react";
import NoteContext from "./NoteContext"; // importing noteContext context

const NoteState = (props) => {
    const host = "http://localhost:5001";
    const Notes = []; // initial Notes array is empty

      const [notes,setnotes] = useState(Notes) // setting the initial state as our hardcord above notes

      //Add a note:
      const addNote = async (title, description, tag) => { // note will take title, description and tag. All the other things will happen by iteself like user(send through header) and date etc
        // API call to add the note in the backend
        //see fetch API notes
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          // setting headers as content-type and auth-token required by the update endpoint in backend
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = response.json(); // will parse the value as json

        //logic to delete a note in frontend
        console.log("adding note");
        const note = {
          "_id": "645f7b80fff3bc85f1f61e61b3",
          "user": "645e2cf312c8c25165506c70",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-05-13T11:58:56.481Z",
          "__v": 0
          }
          setnotes(Notes.concat(note));// concat returns an array after adding and push updates an array. It will give error in the notes.map if push function is used.
      }

      //fetch all notes a note:
      const fetchNote = async (title, description, tag) => { // note will take title, description and tag. All the other things will happen by iteself like user(send through header) and date etc
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

      //Delete a note:
      const deleteNote = (id) => {
        // todo: API call

        //logic to delete a note
        console.log("Deleting note with id " + id);
        const newNotes = notes.filter((note) => {return note._id !== id}); // filtering the note which you want to delete
        setnotes(newNotes);
      }

      //Edit a note:
      const editNote = async (id, title, description, tag) => {
        // API call to update the note in the backend
        //see fetch API notes
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            // setting headers as content-type and auth-token required by the update endpoint in backend
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ1ZTJjZjMxMmM4YzI1MTY1NTA2YzcwIn0sImlhdCI6MTY4MzkwNDg3Nn0.xNvgpvozThHdiZpXkgH3eafAIWViGu3IcAgUG7s05Lk"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const json = response.json(); // will parse the value as json

        //logic to edit a note in frontend
        for (let index = 0; index < Notes.length; index++) {
          const element = Notes[index];
          if(element._id === id)
          {
            element.title =  title;
            element.description =  description;
            element.tag =  tag;
          }
        }
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