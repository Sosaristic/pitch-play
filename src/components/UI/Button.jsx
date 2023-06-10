import React from "react";

export default function Button({ value, onClick, disabled, type }) {
  return (
    <button className="bg-primary text-white text-lg transition-all duration-300 active:bg-hover lg:hover:bg-hover px-4 py-1 rounded-md w-full h-full disabled:bg-hover disabled:cursor-not-allowed"
    onClick={onClick}
    disabled={disabled}
    type={type}
    >
      {value}
    </button>
  );
}
