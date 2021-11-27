import { ActionCounter } from "../actions/CounterActions";
import { CounterState } from "../interfaces/Counter";

export const counterReducer = (
  state: CounterState,
  action: ActionCounter
): CounterState => {
  const { changes, counter } = state;
  switch (action.type) {
    case "reset":
      return { counter: 0, prevCounter: 0, changes: 0 };

    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        prevCounter: counter,
        changes: changes + 1,
      };

    default:
      return state;
  }
};
