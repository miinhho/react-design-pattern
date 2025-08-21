import { useEffect, useState } from 'react'
import type { Todo } from '../../types/todo'

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const getTodoList = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?userId=1',
    )
    const data = await response.json()
    setTodoList(data)
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return todoList
}
