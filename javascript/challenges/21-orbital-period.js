function itemOrbitalPeriod(bodyAverageAltitude) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return Math.round(
    2 * Math.PI * Math.sqrt(Math.pow(earthRadius + bodyAverageAltitude, 3) / GM)
  );
}

function orbitalPeriod(bodies) {
  let result = [];
  bodies.forEach((body) => {
    result.push({
      name: body.name,
      orbitalPeriod: itemOrbitalPeriod(body.avgAlt),
    });
  });
  return result;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

//My simple but less transparent solution
/* function orbitalPeriod(bodies) {
  let result = [];
  bodies.forEach((body) => {
    result.push({
      name: body.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(6367.4447 + body.avgAlt, 3) / 398600.4418)
      )
    });
  });
  return result;
} */

//A nice solution from the forum
function orbitalPeriod(a) {
  return a.map((p) => {
    return {
      name: p.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(p.avgAlt + 6367.4447, 3) / 398600.4418)
      ),
    };
  });
}
