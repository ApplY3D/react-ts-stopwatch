import React, { ReactChild } from "react";
import "./Button.scss";

interface IButton {
  children?: string | ReactChild;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="stopwatch__button">
      {children}
    </button>
  );
};
