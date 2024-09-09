import { useContext } from "react";
import context from "../context/context";

const Toggle = () => {
  const ctx = useContext(context);

  return (
    <>
      <h2>Toggle</h2>
      <p>{ctx.toggle}</p>
      <button onClick={() => ctx.toggleStateHandler()}>Toggle State</button>
    </>
  );
};

export default Toggle;
