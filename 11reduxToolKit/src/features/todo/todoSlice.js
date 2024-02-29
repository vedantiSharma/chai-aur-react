
import { nanoid , createSlice } from "@reduxjs/toolkit";
const initialState = {
    todos: [
        {
            id: 1, //objects of todos
            //text: "hello world in TODOslice"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {                        //creating reducer
               addTodo: (state, action) => {
                 const todo = 
                 {
                     id: nanoid(),
                     text: action.payload  //payload is a object
                 }

            state.todos.push(todo); // pushed in the action
        },                   //STATE* will give the access of all the values presnet on that time
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        
                                                                         // the values are called to perfrom particular action like delete etc are the work of ACTION*
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer  