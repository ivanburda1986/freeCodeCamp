function sumPrimes(num) {
    let all = [];
    let primes = [];
    //Get all umber from 0 to the argument (included)
    for (let i = 1; i <= num; i++) {
        all.push(i);
    }

    all.forEach(number => {
        //For each number get all numbers preceeding it except of the first number (which is 1)
        let preceedings = all.slice(1, all.indexOf(number));

        //Divide each number by all the listed preceeding numbers (all except 1)
        let divisions = [];
        preceedings.forEach(preceedingNum => {
            divisions.push(number / preceedingNum);
        })

        //Check results of the division. If there is an integer among them then the number is not a prime number
        let isPrime = 1;
        divisions.forEach(division => {
            if (division - Math.floor(division) === 0) {
                isPrime = 0;
            };
        })
        //If the number is a prime nubmer push it to the list of prime numbers
        if (isPrime === 1) {
            primes.push(number);
        }
    })

    //Remove number 1 from the list, because 1 is not a primer number
    primes.shift();

    //Return sum of all prime numbers
    function getSum(total, addition) {
        return total + addition;
    }
    return (primes.reduce(getSum, 0));
}

sumPrimes(10);