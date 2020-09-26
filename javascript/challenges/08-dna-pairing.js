function pairElement(str) {
  let pair = [];
  [...str].forEach(letter => {
    switch (letter) {
      case "C":
        return pair.push([letter, "G"]);
      case "G":
        return pair.push([letter, "C"]);
      case "A":
        return pair.push([letter, "T"]);
      case "T":
        return pair.push([letter, "A"]);
      case "A":
        return pair.push([letter, "G"]);
      case "G":
        return pair.push([letter, "A"]);
    }
  });
  return pair;
}

pairElement("GCG");
// pairElement("ATCGA");
// pairElement("TTGAG");
// pairElement("CTCTA");