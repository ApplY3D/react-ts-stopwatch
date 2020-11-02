import React, { useState, useEffect } from "react";
import { stringifyTime } from "../../utils";
import "./Circle.scss";

interface ICircle {
  time: number;
}

export const Circle: React.FC<ICircle> = ({ time }) => {
  const [rotate, setRotate] = useState<number>(90);

  useEffect(() => {
    // setRotate((prev) => {
    //   if (prev >= 360) {
    //     return 1;
    //   }
    //   return (time - prev / 360) * 360;
    // });
    setRotate((time * 180 + 90) % 360);
  }, [time]);

  return (
    <div className="circle__timer-wrapper">
      <div className="circle__time">{stringifyTime(time)}</div>
      <div className="circle">
        <svg className="dial">
          <defs>
            <linearGradient id="outer">
              <stop offset="0%" stop-color="green"></stop>
              <stop offset="4%" stop-color="transparent"></stop>
              <stop offset="100%" stop-color="transparent"></stop>
            </linearGradient>
            {/* <linearGradient id="inner">
              <stop offset="0%" stop-color="transparent"></stop>
              <stop offset="8%" stop-color="var(--color-border)"></stop>
              <stop offset="100%" stop-color="var(--color-border)"></stop>
            </linearGradient> */}
          </defs>

          <circle
            fill="transparent"
            stroke="var(--color-border)"
            transform={`rotate(90 100 100)`}
            stroke-width="7"
            r="85"
            cy="100"
            cx="100"
            stroke-dasharray="3 3"
          ></circle>

          <circle
            fill="transparent"
            stroke="url(#outer)"
            stroke-dasharray="3 3"
            transform={`rotate(${rotate} 100 100)`}
            stroke-width="7"
            r="85"
            cy="100"
            cx="100"
          ></circle>
        </svg>

        {/* <svg className="dial dial__outer">
          <defs>
            <linearGradient id="myGradient">
              <stop offset="0%" stop-color="green" />
              <stop offset="4%" stop-color="transparent" />
              <stop offset="100%" stop-color="transparent" />
            </linearGradient>
          </defs>
          <circle
            fill="transparent"
            stroke="url(#myGradient)"
            stroke-dasharray="3 3"
            transform={`rotate(${rotate} 100 100)`}
            stroke-width="7"
            r="85"
            cy="100"
            cx="100"
          ></circle>
        </svg> */}
      </div>
    </div>
  );
};
