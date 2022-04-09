import React from "react";
import "./Button.css";

export default function Button({ children, disabled = false, onClick }) {
  return (
    <button className="Button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
