import React from "react";
import { Button, Skeleton } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { useQuery, useMutation } from "@apollo/client";
import { GetStarButtonDocument } from "./data/get-star-button.github.gql.generated";
import { StarRepoDocument } from "./data/star-repo.github.gql.generated";
import { UnstarRepoDocument } from "./data/unstar-repo.github.gql.generated";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const StarButton = () => {
  const { data } = useQuery(GetStarButtonDocument);
  const [starRepo, { loading: starLoading }] = useMutation(StarRepoDocument);
  const [unstarRepo, { loading: unstarLoading }] =
    useMutation(UnstarRepoDocument);

  if (!data?.repository) {
    return <Skeleton.Button size="small" />;
  }
  const { id, viewerHasStarred, stargazerCount } = data.repository;

  return (
    <Button
      size="small"
      icon={viewerHasStarred ? <StarFilled /> : <StarOutlined />}
      onClick={() =>
        viewerHasStarred
          ? unstarRepo({ variables: { id } })
          : starRepo({ variables: { id } })
      }
      loading={starLoading || unstarLoading}
    >
      {viewerHasStarred ? "Unstar" : "Star"} {formatter.format(stargazerCount)}
    </Button>
  );
};

export default StarButton;
