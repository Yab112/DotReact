import { jsx as _jsx } from "react/jsx-runtime";
const Horzotalline = ({ color = "bg-slate-400", width = "w-[98%]", thickness = "h-[2px]", marginY = "my-2", }) => {
    return (_jsx("div", { className: `${color} ${width} ${thickness} ${marginY} mx-auto rounded-full` }));
};
export default Horzotalline;
