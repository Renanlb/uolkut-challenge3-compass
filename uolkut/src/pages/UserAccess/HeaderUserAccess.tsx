//CSS
import styles from './HeaderUserAccess.module.css'

const HeaderUserAccess = () => {
  return (
    <header>
        <nav className={styles.navbar}>
            <h1>UOLkut</h1>
            <span>
              Centro de segurança
            </span>
        </nav>
    </header>
  )
}

export default HeaderUserAccess