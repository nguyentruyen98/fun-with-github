import { FC } from "react";
import { Layout } from "antd";
import { useRoutes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import "./App.less";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import routes from "./routes";
import currentRepoVar from "./local-states/current-repo";
import generatedTypes from "./generated/github";

const httpLink = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer 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`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          currentRepo: {
            read() {
              return currentRepoVar();
            },
          },
        },
      },
    },
    possibleTypes: generatedTypes.possibleTypes,
  }),
});

const App: FC = () => {
  const routeElement = useRoutes(routes);

  return (
    <ApolloProvider client={client}>
      <Layout>
        <SideBar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header />
          {routeElement}
          <Layout.Footer style={{ textAlign: "center" }}>
            Fun with Github ©2021 Created by 200lab
          </Layout.Footer>
        </Layout>
      </Layout>
    </ApolloProvider>
  );
};
export default App;
