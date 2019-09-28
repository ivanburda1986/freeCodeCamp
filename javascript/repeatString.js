function repeatStringNumTimes(str, num) {
    let finalString = '';
    if(num > 0){
        for(let i = 0; i < num; i +=1){
            finalString += str;
        }
        return finalString;
    } else {
        return finalString;
    }
  }
  
repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3)