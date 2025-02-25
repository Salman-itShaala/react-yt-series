import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  function handleAddTodo() {
    // todo add

    const todoObj = {
      title: todoTitle,
      id: Date.now(),
      done: false,
    };

    setTodos((prev) => [...prev, todoObj]);

    setTodoTitle("");
  }

  return (
    <div className=" bg-slate-950 text-slate-100 min-h-screen">
      <h1 className="font-bold text-2xl text-center">Todo app</h1>

      <div className="flex gap-4 justify-center py-4">
        <input
          type="text"
          placeholder="Enter todo"
          className="border-1 border-amber-50 rounded-sm p-2"
          onChange={(e) => setTodoTitle(e.target.value)}
          value={todoTitle}
        />
        <button
          onClick={() => handleAddTodo()}
          className="border-1 border-amber-50 rounded-sm p-2 font-bold bg-slate-600 hover:bg-slate-800 cursor-pointer"
        >
          Add To do
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 p-4">
        {todos.map((todo) => {
          return (
            <div
              key={todo.id}
              className="border-1 border-slate-100 rounded-xl p-4 flex flex-col gap-4 "
            >
              <p>{todo.title}</p>
              <button className="border border-green-600 rounded p-2 w-fit">
                Edit Todo
              </button>
              <button className="border border-red-600 rounded p-2 w-fit">
                Delete Todo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
