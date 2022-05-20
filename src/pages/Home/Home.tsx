import { useQuery } from "@apollo/client";
import { Typography, Skeleton } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Content from "../../components/Content";
import { GetHomepageDocument } from "./data/get-home-page.github.gql.generated";
const Home = () => {
  const { data, loading } = useQuery(GetHomepageDocument);

  const object = data?.repository?.object;

  return (
    <Content>
      <Typography.Text>
        {data && (
          <ReactMarkdown plugins={[remarkGfm]}>
            {object && "text" in object ? object.text || "" : ""}
          </ReactMarkdown>
        )}

        {loading && <Skeleton active />}
      </Typography.Text>
    </Content>
  );
};

export default Home;
