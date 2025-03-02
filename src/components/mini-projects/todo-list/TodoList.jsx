import React, { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState({ name: "", completed: false });
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask({ name: "", completed: false });
  }

  function handleDelete(item) {
    setTodo(todo.filter((task) => task !== item));
  }

  function handleComplete(name) {
    const newItem = todo.map((item) =>
      item.name === name ? { ...item, completed: !item.completed } : item
    );
    setTodo(newItem);
    console.log(newItem);
  }

  const completedTask = todo.filter((item) => item.completed).length;
  const sortedTask = todo.slice().sort((a, b) => Number(a.completed) - Number(b.completed))

  return (
    <div className="box-border w-full bg-[#FFFDF2] h-full p-4">
      <h1 className="text-5xl font-bold font-mono tracking-wider mb-8 md:text-center">
        Todo List
      </h1>
      <form
        className="md:flex md:justify-center md:gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="w-[80%] font-mono border-black border-2 p-2.5 outline-none shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-[#FFA6F6] tracking-wider"
          placeholder="Add new task ..."
          type="text"
          value={task.name}
          onChange={(e) => setTask({ name: e.target.value, completed: false })}
          required
        />

        <button
          className="h-12 bg-black text-white font-mono border-black border-2 p-2.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:bg-[#00E1EF]"
          type="submit"
        >
          Add
        </button>
      </form>

      {completedTask <= 0 ? (
        <h2 className="hidden"></h2>
      ) : (
        <h2 className="w-full p-4 mt-4 hover:cursor-pointer font-mono font-semibold items-start flex justify-center place-self-center">
          Completed Task: {completedTask}
        </h2>
      )}

      <div className="flex w-full lg:flex-row h-[90%] lg:flex-wrap lg:justify-center gap-4 flex-col">
        {sortedTask.map((item) => (
          <div
            className="w-[90%] lg:w-[22%] flex flex-row-reverse lg:flex-col lg:box-border lg:h-[35%] justify-center items-start m-2 border-black border-2 rounded-md shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white"
            key={item.name}
          >
            <button
              className=" lg:w-full hover:cursor-pointer flex place-self-start justify-end p-4 hover:text-red-500"
              onClick={() => handleDelete(item)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <p
              className={
                item.completed
                  ? "line-through w-full h-full font-mono font-semibold items-center flex justify-center place-self-center line-clamp-3 lg:line-clamp-none"
                  : "w-full h-full hover:cursor-pointer font-mono font-semibold items-center flex justify-center place-self-center line-clamp-3 lg:line-clamp-none"
              }
              onClick={() => handleComplete(item.name)}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
