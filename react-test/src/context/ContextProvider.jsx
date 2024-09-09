import { useState } from "react";
import context from "./context";

const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState("yes");

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    setCount((prevState) => prevState - 1);
  };

  const toggleStateHandler = () => {
    if (toggle === "yes") {
      setToggle("No");
    } else {
      setToggle("yes");
    }
  };

  const value = {
    count,
    toggle,
    incrementCount,
    decrementCount,
    toggleStateHandler,
  };

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default ContextProvider;
