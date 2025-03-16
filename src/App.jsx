import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import TodoList from "./components/mini-projects/todo-list/TodoList";
import { NotFoundComponent } from "./components/NotFoundComponent";

export default function App() {
  return (
    <>
      {/* <Homepage /> */}
      {/* <TodoList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}