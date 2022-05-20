import { Typography } from 'antd'
import Content from '../../components/Content'
import Statistics from './Statistics'
import PullRequestsList from './PullRequestsList'

const PullRequests = () => (
  <Content>
    <Typography.Title>Pull Requests</Typography.Title>
    <Statistics />
    <PullRequestsList />
  </Content>
)

export default PullRequests
