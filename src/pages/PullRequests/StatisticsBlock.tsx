import { FC, ReactNode } from 'react'
import { Statistic, Card, Typography, Tooltip } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'

const { Text } = Typography

type Props = {
  tooltip?: string
  title: string
  icon: ReactNode
  color?: string
  value: string | number
  suffix?: string
}

const StatisticsBlock: FC<Props> = ({
  tooltip,
  title,
  icon,
  color,
  value,
  suffix,
}) => (
  <Card>
    <Statistic
      title={
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text type='secondary'>{title}</Text>
          {!!tooltip && (
            <Tooltip title={tooltip}>
              <InfoCircleOutlined />
            </Tooltip>
          )}
        </div>
      }
      value={value}
      valueStyle={{ color }}
      prefix={icon}
      suffix={suffix}
    />
  </Card>
)

export default StatisticsBlock
