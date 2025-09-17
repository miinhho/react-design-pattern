import styles from './Todo.module.css'
import { useTodoList } from './useTodoList'

const TodoList = () => {
  const todoList = useTodoList()

  return (
    <div className={styles.container}>
      {todoList.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default TodoList
