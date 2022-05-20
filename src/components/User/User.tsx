import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Typography } from "antd";
import { useQuery } from "@apollo/client";

import { GetUserDocument } from "./data/get-user.github.gql.generated";
const { Link, Text } = Typography;

const User = () => {
  const { data } = useQuery(GetUserDocument);

  return (
    <Link href={data?.viewer.url} target="_blank">
      <Text strong>{data?.viewer.name}</Text>
      <Badge count={5}>
        <Avatar
          style={{ margin: 0, marginLeft: 16 }}
          shape="square"
          icon={<UserOutlined />}
          src={data?.viewer.avatarUrl}
        />
      </Badge>
    </Link>
  );
};

export default User;
