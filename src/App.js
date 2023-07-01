import {Routes,Route} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import './App.css';
import Display from "./pages/Display";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Display/:bloodGroup/:city" element={<Display/>}/>
      </Routes>
    </>
  );
}

export default App;
