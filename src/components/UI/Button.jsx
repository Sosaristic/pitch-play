import React from "react";

export default function Button({ value, onClick, disabled }) {
  return (
    <button className="bg-primary text-white active:bg-hover lg:hover:bg-hover px-4 py-1 rounded-2xl w-full h-full disabled:bg-hover"
    onClick={onClick}
    disabled={disabled}
    >
      {value}
    </button>
  );
}
