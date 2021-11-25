import { Box, Button, Typography } from "@material-ui/core";
import { useCounter } from "../../hooks/useCounter";

export const CounterHook = () => {
  const {
    counter,
    elementToAnimate,
    handleIncrementCounter,
    handleDecrementCounter,
  } = useCounter({ maximunCount: 20 });

  return (
    <Box>
      <Typography variant="h5" component="h5">
        Counter <p ref={elementToAnimate}>{counter}</p>{" "}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem", marginRight: "1rem" }}
        onClick={handleIncrementCounter}
      >
        Incremenar
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "1rem" }}
        onClick={handleDecrementCounter}
      >
        Decrementar
      </Button>
    </Box>
  );
};
