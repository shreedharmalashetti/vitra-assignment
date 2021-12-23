import { useState } from "react";
import './mrs.css'

export default ({ min, max, step, minChange, maxChange }) => {
  const [minThumb, setMinThumb] = useState(min);
  const [maxThumb, setMaxThumb] = useState(max);

  const left = ((minThumb - min) / (max - min)) * 100;
  const right = ((max - maxThumb) / (max - min)) * 100;

  return (
    <div className="relative w-full h-10">
      <input
        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        onChange={(e) => {
          minChange(e.target.value);
          setMinThumb(e.target.value);
        }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={minThumb}
      />
      <input
        className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
        onChange={(e) => {
          maxChange(e.target.value);
          setMaxThumb(e.target.value);
        }}
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxThumb}
      />

      {/* track */}
      <div className="absolute z-10 h-2 top-2 w-full rounded-md bg-gray-400"></div>
      <div
        style={{ left: `${left}%`, right: `${right}%` }}
        className="absolute z-10 h-2 top-2  rounded-md bg-green-300"
      ></div>

      {/* left pointer  */}
      <div
        style={{ left: `${left}%` }}
        className="absolute z-10 w-6 h-6   bg-green-300 rounded-full"
      ></div>

      {/* rigth pointer  */}
      <div
        style={{ right: `${right}%` }}
        className="absolute z-10 w-6 h-6   bg-green-300 rounded-full "
      ></div>
    </div>
  );
};
