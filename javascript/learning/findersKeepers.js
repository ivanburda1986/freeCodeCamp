function findElement(arr, func) {
    let fitting;
    for(let i = 0; i < arr.length; i +=1 ){
        if(func(arr[i]) === true){
            return arr[i];
        }
    }
    return undefined; 
  }

findElement([1, 3, 5, 8, 9, 10], (num) => { return num % 2 === 0; });
findElement([1, 3, 5, 9], (num) => { return num % 2 === 0; });
