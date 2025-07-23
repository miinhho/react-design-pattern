import { useReducer } from "react"
import type { LoginFormAction, LoginFormData } from "./form.type"
import styles from "./LoginForm.module.css"

const initialState: LoginFormData = {
  username: "",
  password: "",
  loggedIn: false,
}

const loginReducer = (_state: LoginFormData, action: LoginFormAction) => {
  switch (action.type) {
    case "login": {
      return {
        username: action.payload.username,
        password: action.payload.password,
        loggedIn: true,
      }
    }
    case "logout": {
      return initialState
    }
    default: {
      return initialState
    }
  }
}

const LoginForm = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get("username") as string
    const password = formData.get("password") as string

    dispatch({
      type: 'login',
      payload: {
        username,
        password,
      }
    })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  return (
    <>
      {state.loggedIn ? (
        <div className={styles.userStatus}>
          <p>환영합니다 {state.username}!</p>
          <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <form onSubmit={login} className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="이름"
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </>
  )
}

export default LoginForm