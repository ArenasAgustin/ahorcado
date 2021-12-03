import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home.jsx"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path = "/" element={<Landing />} />
      <Route exact path = "/home" element={<Home/>} /> 
    </Routes>
    </div>
  );
}

export default App;
