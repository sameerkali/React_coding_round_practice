import { forwardRef } from "react";

const Circle = forwardRef((props,ref) => {
    // const [left, right] = props
  return (
    <div
      className="h-10 w-10 bg-purple-500/60 rounded-full absolute "
      style={{ top: 0, left: 0 }}
      ref={ref}
    ></div>
  );
});

export default Circle;
