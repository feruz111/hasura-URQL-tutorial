import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  Provider,
  Client,
  defaultExchanges,
  dedupExchange,
  fetchExchange,
} from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { delayExchange } from "./utils/delay";

const cache = cacheExchange({});

const client = new Client({
  url: "https://feruz-test.hasura.app/v1/graphql",
  exchanges: [
    delayExchange({ delayMs: 1000 }),
    dedupExchange,
    cache,
    fetchExchange,
  ],
});

ReactDOM.render(
  <Provider value={client}>
    <App />
  </Provider>,
  document.getElementById("root")
);
