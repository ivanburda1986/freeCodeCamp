function sumPrimes(num) {
    for(let delenec = 1; delenec <= num; delenec += 1){
        for (let delitel = 1; delitel <= delenec; delitel += 1){
            if (delenec%delitel){
                console.log(delenec)
            } else { return false};
        }
    }
  }
  
  sumPrimes(10);