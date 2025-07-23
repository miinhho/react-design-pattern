import { useEffect, useState } from "react";
import type { Todo } from "../../types/todo";
import TodoListPresentation from "./TodoListPresentation";

const TodoListContainer = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodoList = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=1"
    )
    const data = await response.json()
    setTodoList(data)
  }

  useEffect(() => {
    getTodoList()
  })

  return (
    <TodoListPresentation todos={todoList} />
  )
}

export default TodoListContainer