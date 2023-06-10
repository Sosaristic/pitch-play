import React from "react";

export default function Button({ value, onClick, disabled, type, endIcon, startIcon }) {
  return (
    <button className="bg-primary flex items-center justify-center gap-2 text-white text-lg transition-all duration-300 active:bg-hover lg:hover:bg-hover px-4 py-1 rounded-md w-full h-full disabled:bg-hover disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
    type={type}
    >
      {startIcon && <span>{startIcon}</span>}
      {value}
      {endIcon && <span className="">{endIcon}</span>}
    </button>
  );
}
