
import React, { useState, useReducer } from "react";
 import { reducer, initialState } from "./reducer";

function TodoList  ()  {

  const [State, dispatch] = useReducer(reducer, initialState);
  const [newTodoText, setNewTodoText] = useState('');

  const handleChanges = e => {
   
    setNewTodoText ( e.target.value);
  };
 console.log(State)
  return (
   
    <div>

    

      <div>
        <input
          className="title-input"
          type="text"
          name="newTitleText"
          value={newTodoText}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
             dispatch({ type: "addItem", payload: newTodoText });
          }}
        >
          add todo
        </button>
      </div>
    

      {/* <div 
      

      onClick={() => {
      dispatch({ type: "TOGGLE_COMPLETED" }); }}>
     {}</div> */}

        {State.todos.map(item =>(
     <div 
     className={`item${State.completed ? " completed" : ""}`}
     onClick={(e) => {
       console.log(e.target.classname)
      dispatch({ type: "TOGGLE_COMPLETED" }); }}>
     <div>{item.item}</div>
     </div>
  
        ))} 
   
    </div>
  );
};

export default TodoList;
