import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Header} from "./Header/Header";

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
    <>
      <Header />

      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path={'/more'} element={<More/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/'} element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
