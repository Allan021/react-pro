import { Typography } from "@material-ui/core";
import React from "react";
import { CounterHook } from "../components/Counter/CounterHook";
import { CounterReducer } from "../CounterReducer/CounterReducer";

export const Counters = () => {
  return (
    <div>
      <Typography variant="h2" color="initial" component="h3">
        Counters
      </Typography>
      <CounterHook />
      <hr />
      <CounterReducer />
    </div>
  );
};
