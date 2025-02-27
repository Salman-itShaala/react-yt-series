import { useState } from "react";

function TodoCard({ todo, deleteTodo, todos, setTodos }) {
  const [showPopUp, setShowPopUp] = useState(false);

  const [editedTitle, setEditedTitle] = useState(todo.title);

  function editTodo(id) {
    // id-->  todos
    const editedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.title = editedTitle;
      }
      return todo;
    });

    setTodos(editedTodos);

    setShowPopUp(false);
  }

  return (
    <div className="border-1 border-slate-100 rounded-xl p-4 flex flex-col gap-4 ">
      {showPopUp && (
        <div className="absolute flex justify-center items-center top-0 left-0 h-[100vh] w-[100%]">
          <div className="h-full w-full backdrop-blur-sm z-40  absolute top-0 left-0"></div>
          <div className="h-[30vh] z-50 w-[30vw] flex justify-center items-center gap-4 p-4 border rounded-2xl border-slate-500 relative">
            <input
              type="text"
              onChange={(e) => setEditedTitle(e.target.value)}
              value={editedTitle}
              className="p-2 border-2"
            />
            <button
              onClick={() => editTodo(todo.id)}
              className="cursor-pointer border px-4 py-2 rounded-sm"
            >
              Save
            </button>

            <button
              onClick={() => setShowPopUp(false)}
              className="self-start cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <p>{todo.title}</p>
      <button
        onClick={() => setShowPopUp((prev) => !prev)}
        className="border cursor-pointer border-green-600 rounded p-2 w-fit"
      >
        Edit Todo
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="border cursor-pointer border-red-600 rounded p-2 w-fit"
      >
        Delete Todo
      </button>
    </div>
  );
}

export default TodoCard;
