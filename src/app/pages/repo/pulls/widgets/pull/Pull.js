import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import styles from './pull.scss'

export default function Pull({ title, created_at }) {
  return (
    <ListItem component={Paper} className={styles.pull}>
      <p className={styles.name}>{title}</p>
      <p className={styles.desc}><b>Created: </b>{created_at}</p>
    </ListItem>
  )
}
