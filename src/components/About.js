import React, { useContext, useEffect} from 'react' // importing useContext hook to use context state values
import NoteContext from '../context/notes/NoteContext'


const About = () => {
    const a = useContext(NoteContext);

    useEffect(() => { // this is used to run second value passed by the context
      a.updateInfo();
      // eslint-disable-next-line
    }, [])
    
    return (
        <div>
            {/* Below you are using noteContext NoteState state's state value  and because there are two statue values passed therefore you have to specify which state variable*/}
            This is About {a.info.name} and he is {a.info.age} years old 
        </div>
    )
}

export default About