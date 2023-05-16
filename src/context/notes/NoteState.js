import React , {useState} from "react";
import NoteContext from "./NoteContext"; // importing noteContext context

const NoteState = (props) => {
    const Notes = [ // Hardcoding the notes for the testing
        {
          "_id": "645e6e98a64231a32e8da380a",
          "user": "645e2cf312c8c25165506c70",
          "title": "This is new note",
          "description": "This is the description of the first note created by me and I hope it will work",
          "tag": "personal",
          "date": "2023-05-12T16:51:36.413Z",
          "__v": 0
        },
        // {
        //   "_id": "645f7b40fff3bcg8f1f6e61ac",
        //   "user": "645e2cf312c8c25165506c70",
        //   "title": "This is new note 2",
        //   "description": "This is the description of the first note created by me and I hope it will work 2",
        //   "tag": "personal",
        //   "date": "2023-05-13T11:57:52.699Z",
        //   "__v": 0
        // },
        {
          "_id": "645f7b80fff3bc38f1f6e61b1",
          "user": "645e2cf312c8c25165506c70",
          "title": "This is new note 2",
          "description": "This is the description of the first note created by me and I hope it will work 2",
          "tag": "personal",
          "date": "2023-05-13T11:58:56.299Z",
          "__v": 0
        },
        {
          "_id": "645f7b80fff3b4c8f1f6e61b3",
          "user": "645e2cf312c8c25165506c70",
          "title": "This is new note 2",
          "description": "This is the description of the first note created by me and I hope it will work 2",
          "tag": "personal",
          "date": "2023-05-13T11:58:56.481Z",
          "__v": 0
        },
        {
          "_id": "645f7b80fff3bc8f15f6e61ub3",
          "user": "645e2cf312c8c25165506c70",
          "title": "This is new note 2",
          "description": "This is the description of the first note created by me and I hope it will work 2",
          "tag": "personal",
          "date": "2023-05-13T11:58:56.481Z",
          "__v": 0
        },
        {
            "_id": "645f7b80fff3bc85f1f6e61b83",
            "user": "645e2cf312c8c25165506c70",
            "title": "This is new note 2",
            "description": "This is the description of the first note created by me and I hope it will work 2",
            "tag": "personal",
            "date": "2023-05-13T11:58:56.481Z",
            "__v": 0
        },
        {
            "_id": "645f7b80fff3bc85f1f61e61b3",
            "user": "645e2cf312c8c25165506c70",
            "title": "This is new note 2",
            "description": "This is the description of the first note created by me and I hope it will work 2",
            "tag": "personal",
            "date": "2023-05-13T11:58:56.481Z",
            "__v": 0
        }
      ]

      const [notes,setnotes] = useState(Notes) // setting the initial state as our hardcord above notes

      //Add a note:
      const addNote = (title, description, tag) => { // note will take title, description and tag. All the other things will happen by iteself like user(send through header) and date etc
        // todo: API call
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

      //Delete a note:
      const deleteNote = () => {
        
      }

      //Edit a note:
      const editNote = () => {
        
      }

    return(
        // you can pass the value of this state using value keyword and using overall below syntax
        // <NoteContext.Provider value={{info,updateInfo}}>   // for passing two values
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}> 
            {/* Anything  that in this block will have access to this context values. Here you passed it to all the children means all props */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; // exporting NoteState State