  import { TodoProvider  } from './Context/Context' 
import './App.css'
import { useState } from 'react'

function App() {

  const [todos, SetTodos] = useState([]) // here we gave ([]) array inside braces just to count everyvalue with a loop
  const AddTodo =(Todo)=>{
      SetTodos((prev)=>[{id:Date.now(),todos},...prev])
  }

const TodoUpdate=(id, todo)=>{

}


  return (
    <TodoProvider value={ ''}>
       <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
