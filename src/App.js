import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";

import './App.css';

function About() {
  return (
    <h1>About</h1>
  );
}

function More() {
  return (
    <h1>More</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/more'} element={<More />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/'} element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
