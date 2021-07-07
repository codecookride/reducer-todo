
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

        {State.todos.map(todo =>(
     <div 
    >
     <div className={`item${todo.completed ? " completed" : ""}`}
     
     onClick={() => {
 dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id }); }}>{todo.item}</div>

     </div>
  
        ))} 
   

   
<button
          onClick={(e) => {
            e.preventDefault()
             dispatch({ type: "CLEAR_DONE" });
          }}
        >
          add todo
        </button>
    </div>
  );
};

export default TodoList;
