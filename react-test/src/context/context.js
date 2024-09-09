import { createContext } from "react";

const context = createContext({
  count: 0,
  toggle: true,
  incrementCount: () => {},
  decrementCount: () => {},
  toggleStateHandler: () => {},
});

export default context;
