import { useState } from "react";

function TodoCard({ todo, deleteTodo, todos, setTodos }) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div
      key={todo.id}
      className="border-1 border-slate-100 rounded-xl p-4 flex flex-col gap-4 "
    >
      {showPopUp && (
        <div className="absolute flex justify-center items-center top-0 left-0 h-[100vh] w-[100%] bg-slate-600">
          <div className="h-[30vh] w-[30vw] flex justify-center items-center gap-4 p-4 border-2">
            <input type="text" className="p-2 border-2" />
            <button>Save</button>

            <button onClick={() => setShowPopUp(false)}>Close</button>
          </div>
        </div>
      )}
      <p>{todo.title}</p>
      <button
        onClick={() => setShowPopUp((prev) => !prev)}
        className="border border-green-600 rounded p-2 w-fit"
      >
        Edit Todo
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="border border-red-600 rounded p-2 w-fit"
      >
        Delete Todo
      </button>
    </div>
  );
}

export default TodoCard;
