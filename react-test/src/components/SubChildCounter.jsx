import { useContext } from "react";

import context from "../context/context";

const SubChildCounter = () => {
  const ctx = useContext(context);

  return (
    <div className="flex flex-col gap-7">
      <h4 className="text-lg">SubChild Counter</h4>
      <p className="text-xl">{ctx.count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => ctx.incrementCount()}
          className="p-2 text-white bg-blue-500 rounded-md"
        >
          Increment
        </button>
        <button
          onClick={() => ctx.decrementCount()}
          className="p-2 text-white bg-red-500 rounded-md"
        >
          Deccrement
        </button>
      </div>
    </div>
  );
};

export default SubChildCounter;
