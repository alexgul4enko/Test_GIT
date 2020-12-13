import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useCallback } from 'react'
import cx from 'common/utils/cx'
import styles from './search.scss'

const classes = {
  root: styles.root,
  input: styles.input,
}
const inputProps = { 'aria-label': 'search' }

export default function Search({ search, isLoading }) {
  const handleSearch = useCallback((event) => search(event.target.value), [search])
  return (
    <Paper className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handleSearch}
        placeholder="Search…"
        classes={classes}
        inputProps={inputProps}
      />
      <CircularProgress color="primary" size={20} className={cx(styles.loader, isLoading && styles.active)}/>
    </Paper>
  )
}
