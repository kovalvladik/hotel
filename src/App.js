import './App.css';
import {  Route, Routes, Link} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Home from "./Pages/Home";
import useToken from "./hooks/use-token";
import Login from "./Pages/ Login";

function App() {

    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

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
