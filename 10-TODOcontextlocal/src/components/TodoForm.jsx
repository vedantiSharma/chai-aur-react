import React, { useState } from 'react'
import {useTodo} from '../Context/Context'

function TodoForm() {
    const [todo, setTodo] = useState(" ")
    const {AddTodo} =useTodo()

    const add=(e)=>{ 
        e.preventDefault()//this is confirming your form submission will not trigger the page reload

        if(!todo) return //not working properly  as i am able to add the blank todo still 
        //this (!todo) state prevent from add blank state in todos 

        AddTodo({todo,  completed: false})
        setTodo("")
    }



    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
           
           
           />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm