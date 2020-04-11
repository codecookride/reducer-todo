import React from "react"




export const initialState = {
  
  todos:[
 {item: 'good',completed:false,id: 12345}
]}

  export  const reducer = (state, action) => {

   console.log("reducer state",state)


    switch (action.type) {
      case "addItem":
        return {
         ...state,
         todos:[
           ...state.todos,
          {item: action.payload,
          completed:false,
           id:Date.now()
          }
         ]
          
        };

        case "TOGGLE_COMPLETED":

          return {
            ...state,
              completed: !state.completed
          };
          default:
            return state;
        }
      };
      
      // return {
      //   ...state,
      //         todos:state.todos.map(item=>{
      //         if(item.id === action.payload){
      //           return {
      //             ...item,
      //             completed: !item.completed
      //           };
      //         }
      //         return state;
      //         })
      // };

 