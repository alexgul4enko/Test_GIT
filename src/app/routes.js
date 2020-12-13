import NotFound from 'pages/fallbacks/NotFound'
import AppLayout from 'layouts/mainLayout'
import { routes as users } from 'pages/users'
import Repo from 'pages/repo'

console.log({ users })
const appRoutes = [
  {
    path: '/',
    exact: true,
    name: 'root',
    redirectTo: 'users',
  },
  {
    path: '/users',
    routes: users,
    name: 'users',
    layout: AppLayout,
  },
  {
    path: '/repo/:owner/:uuid',
    component: Repo,
    name: 'repo',
    layout: AppLayout,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    layout: AppLayout,
  },
]

export default appRoutes
