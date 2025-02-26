import { useState } from "react";
import "./App.css";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  function deleteTodo(id) {
    // todos -> array, delete todo with given id

    const newArray = todos.filter((todo) => {
      return todo.id != id;
    });

    console.log(newArray);

    setTodos(newArray);
  }

  function handleAddTodo() {
    // todo add

    if (!todoTitle) {
      return alert("Invalid input");
    }

    const todoObj = {
      title: todoTitle,
      id: Date.now(),
      done: false,
    };

    setTodos((prev) => [...prev, todoObj]);

    setTodoTitle("");
  }

  return (
    <div className="relative bg-slate-950 text-slate-100 min-h-screen">
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
            <TodoCard
              todo={todo}
              deleteTodo={deleteTodo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
