import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "TODO first message",
        completed: false
    }],
    AddTodo: (todo) => { },
    TodoUpdate: (id, todo) => { },
    TodoDelete: (id) => { },
    ToggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider