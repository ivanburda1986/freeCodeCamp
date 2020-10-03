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
