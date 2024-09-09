import ChildCounter from "./ChildCounter";

const Counter = () => {
  return (
    <div>
      <h2 className="text-2xl">Counter</h2>
      <div className="pl-2">
        <ChildCounter />
      </div>
    </div>
  );
};

export default Counter;
