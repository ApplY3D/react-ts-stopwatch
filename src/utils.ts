import { SetStateAction, useEffect, useRef } from "react";

export const addZeroOrReturn = (num: number): string => {
  return num < 10 || num === 0
    ? "0" + num.toString()
    : num === 100
    ? "99"
    : num.toString();
};

export const stringifyTime = (sec: number): string => {
  const truncTime = Math.trunc(sec);

  const fractional = addZeroOrReturn(+((sec - truncTime) * 100).toFixed(0));
  const seconds = addZeroOrReturn(truncTime % 60);
  const minutes = addZeroOrReturn(Math.trunc(truncTime / 60));
  const hours = addZeroOrReturn(Math.trunc(truncTime / 60 / 60));

  return `${hours}:${minutes}:${seconds}.${fractional}`;
};

const parseTime = (timeStr: string) => {
  const timeArr = (timeStr as string).split(":");
  const hrs = +timeArr[0] * 60 * 60;
  const mins = +timeArr[1] * 60;
  const sec = +timeArr[2].split(".")[0];
  const fract = +timeArr[2].split(".")[1];
  const result = +(hrs + mins + sec + fract).toFixed(2);
  return result;
};
