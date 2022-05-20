import { List, Avatar, Button, Space, Select, Tag, Typography } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const listData = new Array(23).fill('').map((_, i) => ({
  href: 'https://ant.design',
  title: `Add native node esm module exports ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
}))

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
]

function tagRender(props: any) {
  const { label, value, closable, onClose } = props
  const onPreventMouseDown = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  )
}

const PullRequestsList = () => (
  <>
    <Typography.Title level={4}>Filter by</Typography.Title>
    <Space>
      <Select
        mode='multiple'
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%', marginBottom: '1rem' }}
        options={options}
      />
    </Space>
    <List
      itemLayout='horizontal'
      pagination={{
        onChange: (page) => {
          console.log(page)
        },
        pageSize: 15,
      }}
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <Button
              key='approve'
              icon={<CheckOutlined />}
              size='small'
              type='primary'
            >
              Mark as Done
            </Button>,
            <Button
              key='close'
              icon={<CloseOutlined />}
              size='small'
              type='ghost'
            >
              Mark as Open
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<Typography.Link>{item.title}</Typography.Link>}
            description='Ant Design, a design language for background applications, is refined by Ant UED Team'
          />
        </List.Item>
      )}
    />
  </>
)

export default PullRequestsList
