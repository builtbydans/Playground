import React from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = React.useState(initialValue);

  const toggleState = () => {
    setState((state) => !state);
  };

  return [state, toggleState];
};

export default useToggle;
