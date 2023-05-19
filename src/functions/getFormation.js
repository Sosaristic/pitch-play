import {
  fourFourTwo,
  fourThreeThree,
  threeFiveTwo,
  fourTwoOneThree,
  fourOneTwoThree,
  fourOneThreeTwo,
  fourTwoThreeOne,
  fourThreeTwoOne,
  fourFiveOne,
  fourOneFourOne,
  fourTwoTwoTwo,
  threeFourThree,
  threeFourTwoOne,
  threeFourOneTwo,
  fiveFourOne
} from "./differentTypesOfFormation";

export function getFormation(lineUp) {
  const allFormations = [
    { id: 1, name: "442", formation: fourFourTwo(lineUp) },
    { id: 2, name: "433", formation: fourThreeThree(lineUp) },
    { id: 3, name: "352", formation: threeFiveTwo(lineUp) },
    { id: 4, name: "4213", formation: fourTwoOneThree(lineUp) },
    { id: 5, name: "4123", formation: fourOneTwoThree(lineUp) },
    { id: 6, name: "4132", formation: fourOneThreeTwo(lineUp) },
    { id: 7, name: "4231", formation: fourTwoThreeOne(lineUp) },
    { id: 8, name: "4321", formation: fourThreeTwoOne(lineUp) },
    { id: 9, name: "451", formation: fourFiveOne(lineUp) },
    { id: 10, name: "4141", formation: fourOneFourOne(lineUp) },
    { id: 11, name: "4222", formation: fourTwoTwoTwo(lineUp) },
    { id: 12, name: "343", formation: threeFourThree(lineUp) },
    { id: 13, name: "3421", formation: threeFourTwoOne(lineUp) },
    { id: 14, name: "3412", formation: threeFourOneTwo(lineUp) },
    { id: 14, name: "541", formation: fiveFourOne(lineUp) },





  ];
  return allFormations;
}
