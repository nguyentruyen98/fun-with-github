import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Skeleton } from "antd";
import { GetWatcherButtonDocument } from "./data/get-watcher-button.github.gql.generated";

import getAction from "./utils/get-action";

const WatcherButton = () => {
  const { data } = useQuery(GetWatcherButtonDocument);

  if (!data?.repository) {
    return <Skeleton.Button size="small" />;
  }

  const { text, IconComponent } = getAction(
    data?.repository?.viewerSubscription
  );

  return (
    <Button size="small" icon={<IconComponent />}>
      {text} {data?.repository?.watchers.totalCount}
    </Button>
  );
};

export default WatcherButton;
