import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom';
import NoteState from './context/notes/NoteState'; // importing NoteState State

function App() {
  return (
    <>
    {/* Below all is wrapped in Notestate state-context so all of the below components and their conmponents can use state value passed by the NoteState state-context */}
      <BrowserRouter>
      <NoteState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
