import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import styles from './issue.scss'

export default function Issue({ title, created_at }) {
  return (
    <ListItem component={Paper} className={styles.pull}>
      <p className={styles.name}>{title}</p>
      <p className={styles.desc}><b>Created: </b>{created_at}</p>
    </ListItem>
  )
}
