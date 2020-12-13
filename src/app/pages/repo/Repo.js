import Grid from '@material-ui/core/Grid'
import Info from './info'
import Pulls from './pulls'
import Issues from './issues'
import styles from './repo.scss'


export default function Repo() {
  return (
    <div className={styles.repo}>
      <Info/>
      <Grid container spacing={3} className={styles.row}>
        <Grid item xs={6} className={styles.item}>
          <Pulls/>
        </Grid>
        <Grid item xs={6} className={styles.item}>
          <Issues/>
        </Grid>
      </Grid>
    </div>
  )
}
