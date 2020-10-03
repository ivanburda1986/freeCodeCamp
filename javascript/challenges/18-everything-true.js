function truthCheck(collection, pre) {
  let allTrue = true;
  collection.forEach((object) => {
    if (!object[`${pre}`]) {
      return (allTrue = false);
    }
  });
  return(allTrue);
}

truthCheck([{ single: "double" }, { single: NaN }], "single");
