import { Link, useNavigate } from 'react-router'
import styles from './App.module.css'
import { patterns } from './constants/patterns'

const App = () => {
  const navigate = useNavigate()

  const handlePatternClick = (path: string) => {
    return () => {
      navigate(path)
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>리액트 디자인 패턴</h1>
          <p>
            효율적이고 유지보수가 용이한 React 애플리케이션을 구축하기 위한 핵심
            디자인 패턴
          </p>
          <Link
            to="https://github.com/miinhho/react-design-pattern/tree/main/src/components"
            className={styles.githubButton}
          >
            📁 예제 코드 보기
          </Link>
        </section>

        <section className={styles.patternGrid}>
          {patterns.map((pattern, index) => (
            <div
              key={index}
              className={styles.patternCard}
              onClick={handlePatternClick(pattern.path)}
            >
              <h3>{pattern.title}</h3>
              <p>{pattern.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
