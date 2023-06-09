import React from "react";

export default function PopOver({ children }) {

  return <div className="fixed z-[1000] top-0 bottom-0 left-0 right-0 popover flex items-center justify-center">{children}</div>;
}