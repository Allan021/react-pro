import { Button, Typography } from "@material-ui/core";
import { useCallback, useReducer } from "react";
import { CounterState } from "./interfaces/Counter";
import { counterReducer } from "./state/counterHook";

const initialCounterState: CounterState = {
  counter: 0,
  prevCounter: 0,
  changes: 0,
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);
  const handleIncrease = useCallback((value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  }, []);
  return (
    <div>
      <Typography variant="h4" color="initial">
        Counter Reducer
      </Typography>
      <Typography variant="h6" color="initial">
        {JSON.stringify(state, undefined, 2)}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem", marginRight: "1rem" }}
        onClick={() => handleIncrease(5)}
      >
        +5
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "1rem", marginRight: "1rem" }}
        onClick={() => handleIncrease(10)}
      >
        +10
      </Button>
      <Button
        variant="contained"
        color="default"
        style={{ marginTop: "1rem", marginRight: "1rem" }}
        onClick={() => handleIncrease(1)}
      >
        +1
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem", marginRight: "1rem" }}
        onClick={handleReset}
      >
        Resetear
      </Button>
    </div>
  );
};
