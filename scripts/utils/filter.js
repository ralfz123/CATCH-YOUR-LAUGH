// Clean data - makes new array with needed data variables - NOT WORKING
function cleanData(rawDataCat, rawDataJokes) {
  const cleanDataCat = rawDataCat.map((element) => {
    // if (){ Function when entries are invalid }
    return {
      id: element.id,
      url: element.url,
    };
  });

  const cleanDataJokes = rawDataJokes.map((element) => {
    return {
      id: element.id,
      setup: element.setup,
      punchline: element.punchline,
    };
  });
  return [cleanDataCat, cleanDataJokes];
}

export { cleanData };
