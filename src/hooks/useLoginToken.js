export function useLoginToken(){

   function getToken(){
    return JSON.parse(window.localStorage.getItem("loginToken"))
   }

   function setToken(tokenValue){
      return window.localStorage.setItem("loginToken", JSON.stringify(tokenValue))
   }
   function removeToken(){
      window.localStorage.removeItem("loginToken")
   }
   return {getToken, setToken, removeToken}
}