import './App.css';
import {Route, Routes, Link, Redirect} from "react-router-dom";
import SearchPage from "./Pages/SearchPage.jsx";
import useToken from "./hooks/use-token";
import Login from "./Pages/ Login.jsx";

function App() {

    const { token, setToken } = useToken();


    if(!token) {
        return <Login  setToken={setToken} />
    }

  return (
      <>
          {!token?<Login  setToken={setToken} />:<Routes >
              <Route path="/" element={<SearchPage setToken={setToken} />}/>
          </Routes>}

      </>

  );
}

export default App;
