import { useId } from "react";
export function useTeamPlayers(){
    
 const   teamPlayers = [
        { id: useId(), pos: "gk", name: "degea", num: 1, isCaptain: false, swapColor: false, isRemoved: false },
        { id: useId(), pos: "df", name: "dalot", num: 2, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "varane", num: 19, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "martinez", num: 6, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "shaw", num: 23, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "casimero", num: 18, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "erikson", num: 14, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "fernades", num: 8, isCaptain: true, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "anthony", num: 21, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "rashford", num: 10, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "sancho", num: 25, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "gk", name: "butland", num: 31, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "maguire", num: 5, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "lindelof", num: 2, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "malacia", num: 12, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "df", name: "w.bissaka", num: 29, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "fred", num: 17, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "mf", name: "mcTominay", num: 24, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "fw", name: "gernacho", num: 49, isCaptain: false, swapColor: false, isRemoved: false},
        { id: useId(), pos: "gk", name: "butland", num: 31, isCaptain: false, swapColor: false, isRemoved: false},
      ];
return {teamPlayers}
}