import { fourFourTwo, fourThreeThree, threeFiveTwo } from "./differentTypesOfFormation"

export function getFormation(lineUp){
const allFormations = [
    {id: 1, name: "442", formation: fourFourTwo(lineUp)},
    {id: 2, name: "433", formation: fourThreeThree(lineUp)},
    {id: 3, name: "352", formation: threeFiveTwo(lineUp)},

]
return allFormations
}