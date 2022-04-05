import React from "react";
import "./Button.css";

export default function Button({ children, disabled, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
