import {useState, useEffect} from "react"

export const useOnlineStatus = ()=>{
const [onlineStatus, setOnlineStatus] = useState(window.navigator.onLine)

useEffect(()=>{
    const handleUserOnlineStatus = ()=>{
        setOnlineStatus(window.navigator.onLine)
    }
window.addEventListener("online", handleUserOnlineStatus)
window.addEventListener("offline", handleUserOnlineStatus)

return ()=>{
    window.removeEventListener("online", handleUserOnlineStatus)
    window.removeEventListener("offline", handleUserOnlineStatus)
}

}, [])

return{onlineStatus}

}