
const slicedLineUp = (lineup, start, end) => {
    return lineup.slice(start, end);
  };


export function fourFourTwo(lineUp){
    const gk = [...slicedLineUp(lineUp, 0, 1)] 
    const df = [...slicedLineUp(lineUp, 1, 5)] 
    const mf = [...slicedLineUp(lineUp, 5, 9)] 
    const fw = [...slicedLineUp(lineUp, 9, 12)]


    return {gk, df, mf, fw}
}

export function fourThreeThree(lineUp){
  const gk = [...slicedLineUp(lineUp, 0, 1)] 
  const df = [...slicedLineUp(lineUp, 1, 5)] 
  const mf = [...slicedLineUp(lineUp, 5, 8)] 
  const fw = [...slicedLineUp(lineUp, 8, 12)]


  return {gk, df, mf, fw}
}
export function threeFiveTwo(lineUp){
  const gk = [...slicedLineUp(lineUp, 0, 1)] 
  const df = [...slicedLineUp(lineUp, 1, 4)] 
  const mf = [...slicedLineUp(lineUp, 4, 9)] 
  const fw = [...slicedLineUp(lineUp, 9, 12)]


  return {gk, df, mf, fw}
}