import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SearchRepoDocument } from "./data/search-repo.github.gql.generated";
import currentRepoVar from "../../../local-states/current-repo";
import { AutoComplete } from "antd";
import getOptionTokens from "./utils/get-option-tokens";

const RepoSearch = () => {
  const [query, setQuery] = useState("react-router");
  const [searchRepo, { data }] = useLazyQuery(SearchRepoDocument);

  const onSearch = (value: string) => {
    setQuery(value);
    searchRepo({ variables: { query } });
  };

  const onSelect = (value: string) => {
    const repo = data?.search.edges?.find((edge) => {
      if (edge?.node && "id" in edge.node) {
        return edge.node.nameWithOwner === value;
      }

      return false;
    });

    if (repo?.node && "id" in repo.node) {
      const [owner, name] = repo.node.nameWithOwner.split("/");
      currentRepoVar({ owner, name });
    }
  };

  return (
    <AutoComplete
      size="middle"
      placeholder="Repo name"
      onSearch={onSearch}
      onSelect={onSelect}
      style={{ width: "100%" }}
    >
      {data?.search.edges?.map((edge) => {
        if (!(edge?.node && "id" in edge.node)) {
          return null;
        }

        return (
          <AutoComplete.Option
            key={edge.node.id}
            value={edge.node.nameWithOwner}
          >
            {getOptionTokens(edge?.textMatches).map(
              (item: any, index: number) =>
                item.isHighlighted ? (
                  <strong key={index}>{item.text}</strong>
                ) : (
                  <React.Fragment key={index}>{item.text}</React.Fragment>
                )
            )}
          </AutoComplete.Option>
        );
      })}
    </AutoComplete>
  );
};

export default RepoSearch;
