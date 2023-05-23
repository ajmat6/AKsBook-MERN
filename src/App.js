import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState"; // importing NoteState State
import Alert from "./components/Alert";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import React, {useState} from "react";

function App() {
  //Alert component setup
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null); //null alert means no alert
    }, 2000);
  }

  return (
    <>
      {/* Below all is wrapped in Notestate state-context so all of the below components and their conmponents can use state value passed by the NoteState state-context */}
      <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* About page TODO */}
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/" element={<Home showalert={showalert}/>} />
            <Route path="/login" element={<Login showalert={showalert}/>} />
            <Route path="/signup" element={<SignUp showalert={showalert}/>} />
          </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
