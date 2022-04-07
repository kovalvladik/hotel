import './App.css';
import {  Route, Routes, Link} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home";

function App() {
  return (
      <>

          <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path="/main" element={<SearchPage/>}/>
          </Routes>
      </>

  );
}

export default App;
