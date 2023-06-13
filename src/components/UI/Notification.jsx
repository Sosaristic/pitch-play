import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function Notification() {
  const {notification} = useAppContext()
  return (
    <div className="fixed top-[-5rem] z-[2000] notification left-[50%] w-[80%] md:w-[60%] lg:w-[40%] bg-hover translate-x-[-50%] text-center py-4 rounded-lg">
      {notification.message}
    </div>
  );
}
