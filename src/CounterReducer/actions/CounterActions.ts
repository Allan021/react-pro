export type ActionCounter =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | {
      type: "reset";
    };
