import React from "react";

export default function PopOver({ children }) {

  return <div className="fixed z-50 top-0 bottom-0 left-0 right-0 popover">{children}</div>;
}
