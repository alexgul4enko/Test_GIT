import { Router } from '@cranium/router'
import routes from 'routes'


export default function AppRouter(props) {
  return (
    <Router routes={routes} notFountUrl="404" />
  )
}
