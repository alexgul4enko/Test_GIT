import Users from './users'
import User from './user'

const routes = [
  {
    path: '/',
    exact: true,
    component: Users,
  },
  {
    path: '/:uuid',
    exact: true,
    component: User,
    name: 'user',
  },
]


export default routes
