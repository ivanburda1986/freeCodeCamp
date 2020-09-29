// function smallestCommons(arr) {
//   let numbers = arr.sort((a, b) => a - b);
//   let small = numbers[0];
//   let big = numbers[1];
//   let keepGoing = true;

//   while (keepGoing) {
//     let bigIsScm = true;
//     for (let i = small; i <= big; i++) {
//       if (big % i !== 0) {
//         bigIsScm = false;
//         break;
//       }
//     }
//     if (bigIsScm) {
//       keepGoing = false;
//       return big;
//     } else {
//       big++;
//     }
//   }

// }

function smallestCommons(arr) {
  let numbers = arr.sort((a, b) => a - b);
  let small = numbers[0];
  let big = numbers[1];

  let scm = big;
  while (true) {
    let isScm = true;
    for (let i = small; i <= big; i++) {
      if (scm % i !== 0) {
        isScm = false;
        break;
      }
    }
    if (isScm) {
      return scm;
    } else {
      scm++;
    }
  }
}


console.log(smallestCommons([1, 5]));