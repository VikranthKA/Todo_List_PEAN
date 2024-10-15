import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AllTodo from "./components/todo/allTodo";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { TodoProvider } from "./context/Todo/TodoContext";

const App:React.FC=()=> {
  return (
    <div className="App">
      <TodoProvider>

      <Router>
        <Routes>
          <Route path="/" element={<AllTodo/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
      </TodoProvider>
    </div>
  );
}

export default App;
