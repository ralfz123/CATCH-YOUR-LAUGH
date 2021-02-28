// Clean data - makes new array with needed data variables - NOT WORKING
function filterCatData(rawCatData) {
  const cleanCatData = rawCatData.map((element) => {
    return {
      url: element.url,
    };
  });
  return cleanCatData;
}

function filterJokeData(rawJokeData) {
  console.log(rawJokeData)
  const cleanJokeData = rawJokeData.map((element) => {
    return {
      id: element.id,
      setup: element.setup,
      punchline: element.punchline,
    };
  });
  return cleanJokeData;
}

export { filterCatData, filterJokeData };


//  Determain which dataset - filter function
// function filterData(rawData) {
//   console.log(rawData)
//   if (rawData === 'dataCatImages') {// Determain which dataset it is
//     const cleanData = rawData.map((element) => {
//       return {
//         url: element.url,
//       };
//     });
//     return cleanData;
//   } else if (rawData === 'dataJoke') {
//     const cleanData = rawData.map((element) => {
//       return {
//         id: element.id,
//         setup: element.setup,
//         punchline: element.punchline,
//       };
//     });
//     return cleanData;
//   }
// }

// export { filterData };
