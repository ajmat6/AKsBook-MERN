import React , {useState} from "react";
import NoteContext from "./NoteContext"; // importing noteContext context

const NoteState = (props) => {
    // const s = {
    //     name: "Ajmat",
    //     age: "18"
    // }

    // const [info, setinfo] = useState(s)   
    
    // const updateInfo = () => {
    //     setTimeout(() => {
    //         setinfo({
    //             name: "Aslam",
    //             age: "17"
    //         })
    //     }, 3000);
    // }

    return(
        // you can pass the value of this state using value keyword and using overall below syntax
        // <NoteContext.Provider value={{info,updateInfo}}> 
        <NoteContext.Provider value={{}}> 
            {/* Anything  that in this block will have access to this context values. Here you passed it to all the children means all props */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; // exporting NoteState State