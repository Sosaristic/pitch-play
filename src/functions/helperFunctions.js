export function getPlayerDetails(id, squadData){
    return squadData?.find((item)=>item.id == id)
}