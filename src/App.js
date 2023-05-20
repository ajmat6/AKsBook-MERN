import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState"; // importing NoteState State
import Alert from "./components/Alert";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* Below all is wrapped in Notestate state-context so all of the below components and their conmponents can use state value passed by the NoteState state-context */}
      <NoteState>
      <BrowserRouter>
        <Navbar />
        <Alert message={"Note has been successfully Deleted!"}/>
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
