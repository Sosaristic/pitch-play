import { useId } from "react";
export function useTeamPlayers(){
    
 const   teamPlayers = [
        { id: useId(), pos: "gk", name: "marvelous", num: 1, isCaptain: false, swapColor: false, isRemoved: false },
        { id: useId(), pos: "df", name: "joshua", num: 2, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "valentine", num: 4, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "Ceejoe", num: 5, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "neme", num: 3, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "anderson", num: 6, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "jake", num: 10, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "kizito", num: 8, isCaptain: true, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "caleb", num: 7, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "francis", num: 11, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "daniel", num: 9, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "gk", name: "christian", num: 20, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "marcelo", num: 12, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "anthony", num: 15, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "shaba", num: 18, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "eluwa", num: 17, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "vincenzo", num: 24, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "beluchi", num: 19, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "osilike", num: 29, isCaptain: false, swapColor: false, isRemoved: false},
      ];
return {teamPlayers}
}