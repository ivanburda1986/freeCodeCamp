function sumAll(arr) {
    let sortedNumbers = ([].concat(arr)).sort(function(a,b){return a-b});
    let allNumbers = [];
    for (let i = sortedNumbers[0]; i <= sortedNumbers[sortedNumbers.length-1]; i += 1){
        allNumbers.push(i);
    }
    let sum = allNumbers.reduce(function(acc, val){return acc+val},0);
    return (sum);
  }

sumAll([1, 4]);