function frankenSplice(arr1, arr2, n) {
  const injected = arr1;
  const targetFront = arr2.slice(0, n);
  const targetBack = arr2.slice(n);
  return [...targetFront, ...injected, ...targetBack];
}


frankenSplice([1, 2, 3], [4, 5], 1) // should return [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) // should return ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].