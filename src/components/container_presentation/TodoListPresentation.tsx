import type { Todo } from '../../types/todo'
import styles from './Todo.module.css'

interface TodoListPresentationProps {
  todos: Todo[]
}

const TodoListPresentation = ({ todos }: TodoListPresentationProps) => {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <div key={todo.id} className={styles.todo}>
          {todo.title}
        </div>
      ))}
    </div>
  )
}

export default TodoListPresentation
