import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import AllTodo from "./components/todo/allTodo";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

const App:React.FC=()=> {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AllTodo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
