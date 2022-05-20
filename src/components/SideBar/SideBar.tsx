import { Layout, Menu } from "antd";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import RepoSearch from "./components/RepoSearch";
import routes from "../../routes";
import "./styles.less";

const SideBar = () => {
  const location = useLocation();
  const matches = matchRoutes(routes, location);

  return (
    <Layout.Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className="logo">
        <RepoSearch />
      </div>
      <Menu selectedKeys={matches?.map(({ pathname }) => pathname)}>
        {routes.map(({ title, icon, path }) => (
          <Menu.Item key={path} icon={icon}>
            <Link to={path || ""}>{title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default SideBar;
