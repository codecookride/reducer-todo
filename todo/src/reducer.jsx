import React from "react"




export const initialState = {
  todos:
 [{item: 'good',completed:false,id: 12345}]
}

  export  const reducer = (state, action) => {

   console.log("reducer state",state)


    switch (action.type) {
      case "addItem":
        return {
         ...state,
         
         todos:  
          [
            ...state.todos,
            {item: action.payload,
          completed:false,
           id:Date.now()
          }]
         
          
        };

      //   case "TOGGLE_COMPLETED":

      //     return {
      //       ...state,
      //         completed: !state.completed
      //     };
      //     default:
      //       return state;
      //   }
      // };



       case "TOGGLE_COMPLETED": 
        
      const list = state.todos.map(item=>{
        if(item.id === action.payload){
          return {
            ...item,
            
            completed: !item.completed
          };
        }
        return item;
        })
        return {
          ...state,
          todos:list

        }
        
      case "CLEAR_DONE":
        console.log(state.todos) 
       return {todos:state.todos.filter(item => !item.completed)};


        default:
          return state;
};
};



      
      // return {
      //   ...state,
      //         todos:state.todos.map(item=>{
      //         if(item.id === action.){
      //           return {
      //             ...item,
      //             completed: !item.completed
      //           };
      //         }
      //         return state;
      //         })
      // };

 