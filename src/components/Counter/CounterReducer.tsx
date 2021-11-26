import { Typography } from "@material-ui/core";
import { useReducer } from "react";

interface CounterState {
  counter: number;
  prevCounter: number;
  changes: number;
}
const initialCounterState: CounterState = {
  counter: 0,
  prevCounter: 0,
  changes: 0,
};
type ActionCounter =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | {
      type: "reset";
    };

const counterReducer;

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialCounterState);
  return (
    <div>
      <Typography variant="h4" color="initial">
        Counter Reducer
      </Typography>
    </div>
  );
};
