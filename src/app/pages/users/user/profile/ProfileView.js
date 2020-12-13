import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import styles from './profile.scss'


export default function ProfileView({ profile }) {
  if(isEmpty(get(profile, 'data'))) {
    return null
  }
  return (
    <header className={styles.header}>
      <Paper className={styles.profile}>
        <Avatar
          src={get(profile, 'data.avatar_url')}
        />
        <div className={styles.data}>
          <p className={styles.info}>Name: <b>{get(profile, 'data.name') || '-'}</b></p>
          <p className={styles.info}>Email: <b>{get(profile, 'data.email') || '-'}</b></p>
          <p className={styles.info}>Location: <b>{get(profile, 'data.location') || '-'}</b></p>
          <p className={styles.info}>Followers: <b>{get(profile, 'data.followers') || '-'}</b></p>
        </div>
      </Paper>
      <h1 className={styles.title}>Repos</h1>
    </header>
  )
}
