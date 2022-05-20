import { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'
import { HomeOutlined, PullRequestOutlined } from '@ant-design/icons'
import Home from './pages/Home'
import PullRequests from './pages/PullRequests'

type Route = RouteObject & {
  icon: ReactNode
  title: string
}

const routes: Route[] = [
  {
    path: '/',
    element: <Home />,
    icon: <HomeOutlined />,
    title: 'Home',
  },
  {
    path: '/pulls',
    element: <PullRequests />,
    icon: <PullRequestOutlined />,
    title: 'Pull Requests',
  },
]

export default routes
