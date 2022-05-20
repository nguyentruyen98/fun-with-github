import { FC } from 'react'
import { Layout, Space } from 'antd'
import './styles.less'

const SideBar: FC = ({ children }) => (
  <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
    <Space
      size='large'
      direction='vertical'
      className='site-layout-background'
      style={{ padding: 24, width: '100%' }}
    >
      {children}
    </Space>
  </Layout.Content>
)

export default SideBar
