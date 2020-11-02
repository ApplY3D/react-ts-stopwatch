import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Checkpoint, ICheckpoint } from "../Checkpoint";
import { Icon } from "../Icon/";
import "./Stopwatch.scss";
import { stringifyTime } from "../../utils";
import { Circle } from "../Circle";

export const Stopwatch: React.FC = () => {
  const [isWatchRunning, setIsWatchRunning] = useState<boolean>(false);
  const [isInitial, setIsInitial] = useState<boolean>(true);
  const [intervalId, setIntervalId] = useState<number>();
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(0);
  const [checkpoints, setCheckpoints] = useState<ICheckpoint[]>([]);

  useEffect(() => {
    if (startTime !== 0) {
      startInterval();
    }
  }, [startTime]);

  const createCheckPoint = (time: number) => {
    setCheckpoints((prev) => [
      {
        time,
        position: checkpoints.length + 1,
        allowance: time - checkpoints[0]?.time || 0,
      },
      ...prev,
    ]);
  };

  const updateTimeLeft = () => {
    const seconds = (Date.now() - startTime) / 1000 + timeLeft;
    setTimeLeft(seconds);
  };

  const startInterval = () => {
    setIsWatchRunning(true);
    const intervalId = window.setInterval(() => {
      updateTimeLeft();
    }, 10);
    setIntervalId(intervalId);
  };

  const initialPlayButtonHandler = () => {
    setTimeLeft(0);
    setCheckpoints([]);
    setIsInitial(false);
    setStartTime(Date.now());
  };

  const playButtonHandler = () => {
    setStartTime(Date.now());
  };

  const pauseButtonHandler = () => {
    clearInterval(intervalId);
    setIsWatchRunning(false);
  };

  const checkpointButtonHandler = () => {
    createCheckPoint(timeLeft);
  };

  const stopButtonHandler = () => {
    setIsInitial(true);
  };

  return (
    <div className="stopwatch">
      <div className="stopwatch__timer">
        <Circle time={timeLeft} />
      </div>
      <div className="stopwatch__buttons">
        {isInitial ? (
          <Button onClick={initialPlayButtonHandler}>Старт</Button>
        ) : isWatchRunning ? (
          <>
            <Button onClick={checkpointButtonHandler}>
              <Icon id="icon-flag" />
            </Button>

            <Button onClick={pauseButtonHandler}>
              <Icon id="icon-pause" />
            </Button>
          </>
        ) : (
          <>
            <Button onClick={stopButtonHandler}>
              <Icon id="icon-cross" />
            </Button>

            <Button onClick={playButtonHandler}>
              <Icon id="icon-play" />
            </Button>
          </>
        )}
      </div>
      <div className="stopwatch__results">
        {checkpoints.length > 0 ? (
          <>
            {checkpoints.map((checkpoint) => {
              return (
                <Checkpoint
                  time={checkpoint.time}
                  allowance={checkpoint.allowance}
                  position={checkpoint.position}
                />
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
      {/* <div className="stopwatch__buttons">
        {isInitial ? (
          <Button onClick={toolButtonHandler}>Старт</Button>
        ) : (
          <>
            <Button onClick={toolButtonHandler}>
              {isWatchRunning ? (
                <Icon id="icon-flag" />
              ) : (
                <Icon id="icon-cross" />
              )}
            </Button>
            <Button onClick={playButtonHandler}>
              {isWatchRunning ? (
                <Icon id="icon-pause" />
              ) : (
                <Icon id="icon-pause" />
              )}
            </Button>
          </>
        )}
      </div> */}
    </div>
  );
};
