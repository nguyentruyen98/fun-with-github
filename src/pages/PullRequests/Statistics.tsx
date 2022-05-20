import { Row, Col } from 'antd'
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  TagOutlined,
} from '@ant-design/icons'
import { blue, green, purple } from '@ant-design/colors'
import StatisticsBlock from './StatisticsBlock'

const Statistics = () => (
  <Row gutter={16}>
    <Col span={6}>
      <StatisticsBlock
        title='Open'
        tooltip='Open PRs that needs to be reviewed'
        value={3}
        color={green.primary}
        icon={<ExclamationCircleOutlined />}
        suffix='PRs'
      />
    </Col>
    <Col span={6}>
      <StatisticsBlock
        title='Merged'
        tooltip='PRs that already got merged and should be in the latest release'
        value={1193}
        color={purple.primary}
        icon={<CheckCircleOutlined />}
        suffix='PRs'
      />
    </Col>
    <Col span={6}>
      <StatisticsBlock
        title='Close'
        tooltip='PRs that got closed and should NOT be included in the latest release'
        value={1193}
        color={blue.primary}
        icon={<CloseCircleOutlined />}
        suffix='PRs'
      />
    </Col>
    <Col span={6}>
      <StatisticsBlock
        title='Labels'
        tooltip='Total number of labels'
        value={11}
        icon={<TagOutlined />}
      />
    </Col>
  </Row>
)

export default Statistics
