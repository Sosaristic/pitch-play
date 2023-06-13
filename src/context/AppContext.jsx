import { createContext, useContext, useState } from "react";
import { ToastContainer, Zoom } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const AppContext = createContext();

export function AppContextProvider({ children }) {
const [notification, setNotification] = useState({
    state: true,
    message: "trying to test out the notification system"
})
const [displayLoader, setDisplayLoader] = useState(false)
const [user, setUser] = useState(null)

  const value = {user, setUser, displayLoader, setDisplayLoader};

  return <AppContext.Provider value={value}>
    <ToastContainer 
       transition={Zoom}
       position='top-center'
       hideProgressBar
       theme='dark'
      />
    
    {children}</AppContext.Provider>;
}

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (appContext == undefined) {
    throw new Error("app context must be used within a context provider");
  }
  return appContext;
}
