import React from 'react';
import './App.css';
import initialState from "./reducer";
import reducer from "./reducer";
import TodoList from "./todolist";

function App() {
  return (
    <div>
      <TodoList/>
     
    </div>
  );
}

export default App;
