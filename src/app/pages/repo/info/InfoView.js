import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'
import styles from './info.scss'

export default function InfoView({ repo }) {
  if(isEmpty(get(repo, 'data'))) {
    return null
  }
  return (
    <header className={styles.header}>
      <Paper className={styles.repo}>
        <p className={styles.name}>{get(repo, 'data.name')}</p>
        <p className={styles.desc}>{get(repo, 'data.description')}</p>
        <div className={styles.infoBlock}>
          <p className={styles.counts}><b>OwnerShip: </b>{get(repo, 'data.fork') ? 'Forked' : 'Own'}</p>
          <p className={styles.counts}><b>Stars: </b>{get(repo, 'data.stargazers_count')} </p>
          <p className={styles.counts}><b>Forks: </b>{get(repo, 'data.forks')} </p>
        </div>
      </Paper>
    </header>
  )
}
