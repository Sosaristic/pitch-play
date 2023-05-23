export function getPlayerDetails(id, squadData) {
  return squadData?.find((item) => item.id == id);
}

export function modifyPlayerDetails(id, squadData, key, value) {
  const newSquadData = squadData?.map((player) => {
    if (player.id === id) {
      return { ...player, [key]: value };
    }
    return player;
  });
  return newSquadData
}
