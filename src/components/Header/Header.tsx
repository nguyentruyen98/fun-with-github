import { FC } from "react";
import { useReactiveVar } from "@apollo/client";
import currentRepoVar from "../../local-states/current-repo";
import { Layout, PageHeader, Space } from "antd";
import WatcherButton from "./components/WatcherButton";
import StarButton from "./components/StartButton";
import User from "../User";

const Header: FC = () => {
  const { name, owner } = useReactiveVar(currentRepoVar);

  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      <PageHeader
        ghost={false}
        title={
          <Space>
            {owner}/{name}
            <WatcherButton />
            <StarButton />
          </Space>
        }
        extra={<User />}
      />
    </Layout.Header>
  );
};

export default Header;
