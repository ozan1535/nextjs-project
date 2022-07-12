import { createContext, useState } from "react";

const StateContext = createContext({
  isLoading: null,
  setIsLoading: null,
});

export function StateContextProvider(props) {
  const [isLoading, setIsLoading] = useState();

  const context = {
    isLoading,
    setIsLoading,
  };

  return (
    <StateContext.Provider value={context}>
      {props.children}
    </StateContext.Provider>
  );
}

export default StateContext;
