import { pipe, delay } from "wonka";
import { Exchange } from "@urql/core";

export interface DelayExchangeOptions {
  delayMs?: number;
}
export const delayExchange = ({ delayMs }: DelayExchangeOptions): Exchange => {
  const DELAY = delayMs || 1000;
  return ({ forward }) =>
    (ops$) =>
      forward(pipe(ops$, delay(DELAY)));
};
