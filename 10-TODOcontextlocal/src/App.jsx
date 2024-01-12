import { TodoProvider } from './Context/Context'
import './App.css'
import { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'


function App() {

  const [todos, SetTodos] = useState([]) // here we gave ([]) array inside braces just to count everyvalue with a loop

  const AddTodo = (todo) => {
    SetTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const TodoUpdate = (id, todo) => {
    SetTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

  }

  const TodoDelete = (id) => {
    SetTodos((prev) => prev.filter((todo) => todo.id !== id))

  }
  const ToggleComplete = (id) => {
    SetTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))

  }

  //extracting all the values on one click we use USEeffect
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      SetTodos(todos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))



  }, [todos])




  return (
    <TodoProvider value={{ todos, TodoUpdate, TodoDelete, AddTodo, ToggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />

              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
