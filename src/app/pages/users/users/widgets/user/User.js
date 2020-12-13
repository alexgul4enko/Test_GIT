import styles from './user.scss'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import { Link } from '@cranium/router'

export default function User({
  avatar_url,
  login,
}) {
  return (
    <Link to="user" uuid={login}>
      <ListItem>
        <Avatar src={avatar_url}/>
        <p className={styles.name}>{login}</p>
      </ListItem>
    </Link>
  )
}
