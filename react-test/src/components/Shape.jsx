import { useState, useRef } from "react";

const Shape = () => {
  const [shapeCount, setShapeCount] = useState();

  const shapeInputRef = useRef();

  const shapeHandler = () => {
    const shapeCount = shapeInputRef.current.value;
  };

  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <div className="flex gap-5">
        <label>Add Shape</label>
        <input
          type="number"
          ref={shapeInputRef}
          className="border border-gray-400 rounded-md"
        />
        <button
          onClick={shapeHandler}
          className="p-2 text-white bg-green-500 rounded-md"
        >
          Add
        </button>
      </div>

      <div className="m-auto w-[35rem] h-[30rem] bg-gray-400"></div>
    </div>
  );
};

export default Shape;
