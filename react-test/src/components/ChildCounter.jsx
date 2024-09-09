import { useContext } from "react";

import SubChildCounter from "./SubChildCounter";

const ChildCounter = () => {
  return (
    <div>
      <h3 className="text-xl">Child Counter</h3>
      <div className="pl-2">
        <SubChildCounter />
      </div>
    </div>
  );
};

export default ChildCounter;
