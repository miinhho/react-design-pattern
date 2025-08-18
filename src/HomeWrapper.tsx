import { Link } from 'react-router';
import styles from './HomeWrapper.module.css';

const HomeWrapper = (children: React.ReactNode) => () =>
  (
    <div className={styles.container}>
      <Link to="/" className={styles.homeButton} title="홈으로 이동">🏠</Link>
      {children}
    </div>
  )

export default HomeWrapper
