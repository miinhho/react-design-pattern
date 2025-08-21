import Counter from './Counter'
import styles from './Counter.module.css'

const DefaultCounter = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Counter initialValue={0}>
          {({ count, increment, decrement, reset }) => (
            <div className={styles.counterContainer}>
              <p>Count: {count}</p>
              <div className={styles.buttonGroup}>
                <button onClick={increment} className={styles.incrementButton}>
                  +1
                </button>
                <button onClick={decrement} className={styles.decrementButton}>
                  -1
                </button>
                <button onClick={reset} className={styles.resetButton}>
                  Reset
                </button>
              </div>
            </div>
          )}
        </Counter>
      </section>
    </div>
  )
}

export default DefaultCounter
