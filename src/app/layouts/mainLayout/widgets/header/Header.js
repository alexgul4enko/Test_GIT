import { Link } from '@cranium/router'
import logo from '@img/git.png'
import styles from './header.scss'


export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="root">
        <img src={logo} alt="logo" className={styles.logo}/>
      </Link>
    </header>
  )
}
