import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider, Client, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { Todolists } from "./components/Todolists";

const cache = cacheExchange({});

const client = new Client({
  url: "https://feruz-test.hasura.app/v1/graphql",
  exchanges: [dedupExchange, cache, fetchExchange],
});

ReactDOM.render(
  <Provider value={client}>
    <Todolists />
  </Provider>,
  document.getElementById("root")
);
