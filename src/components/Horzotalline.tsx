import React from "react";

interface HorzotallineProps {
  color?: string;
  width?: string;
  thickness?: string;
  marginY?: string;
}

const Horzotalline: React.FC<HorzotallineProps> = ({
  color = "bg-slate-400", 
  width = "w-[98%]", 
  thickness = "h-[2px]", 
  marginY = "my-2", 
}) => {
  return (
    <div
      className={`${color} ${width} ${thickness} ${marginY} mx-auto rounded-full`}
    ></div>
  );
};

export default Horzotalline;
