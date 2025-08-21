import TodoListPresentation from './TodoListPresentation'
import { useTodoList } from './useTodoList'

const TodoListContainer = () => {
  const todoList = useTodoList()

  return <TodoListPresentation todos={todoList} />
}

export default TodoListContainer
