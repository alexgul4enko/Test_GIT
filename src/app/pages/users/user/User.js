import Repos from './repos'
import Profile from './profile'
import styles from './user.scss'


export default function User() {
  return (
    <div className={styles.user}>
      <Profile/>
      <Repos/>
    </div>
  )
}
