import React from "react";
import { stringifyTime } from "../../utils";
import "./Checkpoint.scss";

export interface ICheckpoint {
  time: number;
  position: number;
  allowance: number;
}

export const Checkpoint: React.FC<ICheckpoint> = ({
  time,
  position,
  allowance,
}) => {
  return (
    <div className="checkpoint">
      <div className="checkpoint__left-side">
        <div className="checkpoint__position">{position}</div>
        <div className="checkpoint__time">{stringifyTime(time)}</div>
      </div>
      <div className="checkpoint__right-side">
        <div className="checkpoint__allowance">{stringifyTime(allowance)}</div>
      </div>
    </div>
  );
};
