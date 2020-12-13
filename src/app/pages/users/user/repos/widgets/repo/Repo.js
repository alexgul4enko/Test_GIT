import ListItem from '@material-ui/core/ListItem'
import { Link } from '@cranium/router'
import Paper from '@material-ui/core/Paper'
import styles from './repo.scss'

export default function Repo({ name, description, owner }) {
  return (
    <Link to="repo" uuid={name} owner={owner.login}>
      <ListItem component={Paper} className={styles.repo}>
        <p className={styles.name}>{name}</p>
        <p className={styles.desc}>{description}</p>
      </ListItem>
    </Link>
  )
}
