import * as React from "react";

// const [isTextChanged, setIsTextChanged] = useToggle();

export const useToggle = (initialState = false) => {
  const [state, setState] = React.useState(initialState);

  const toggle = React.useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
