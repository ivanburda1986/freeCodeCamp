function checkCashRegister(price, cash, cid) {
  function countRegisterBalance(cid) {
    let total = 0;
    cid.forEach((drawer) => {
      total = total + drawer[1];
    });
    return Number(parseFloat(total).toFixed(2));
  }
  let registerBalance = countRegisterBalance(cid);
  //Calculates the register balance
  function returnChange(howMuchToReturn) {
    let amountToBeReturned = [0];
    let whatToBeReturned = [];
    let registerFromHighest = cid.reverse();
    const dividers = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    const dividerNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

    function sumToBeReturned() {
      return amountToBeReturned.reduce((sum, nextAmount) => {
        return sum + nextAmount;
      });
    }

    //Go through the available money units and use them to pay out from highest to lowest until the return sum is reached
    dividers.forEach((divider) => {
      //As long as the sum of money already put aside for the payout is lower then the return sum, keep adding
      if (sumToBeReturned() < howMuchToReturn) {

        if (parseInt((howMuchToReturn - sumToBeReturned()) / divider) > 0) {
          console.log("Divider " + divider);

          function howMuchOfWhatToPush() {
            let amountToPush = 0;
            let whatToPush;
            //let remaining = (howMuchToReturn - sumToBeReturned()); //0.01
            let remaining = ((howMuchToReturn * 100 - sumToBeReturned() * 100) / 100); //0.01
            console.log("Remaining to pay " + remaining);
            let remainingMultiples = parseInt(remaining / divider); //1
            console.log("Remaining to pay multiples of the divider (" + divider + "):" + remainingMultiples);
            let available = registerFromHighest[dividers.indexOf(divider)][1];
            console.log("Available of the divider (" + divider + "):" + available);
            let availableMultiples = parseInt(available / divider); //11
            console.log("Available to pay multiples of the divider (" + divider + "):" + availableMultiples);
            console.log("-------------")
            if (availableMultiples >= 0) {
              console.log(availableMultiples);
              if (availableMultiples > remainingMultiples) {
                //console.log(availableMultiples > remainingMultiples);
                amountToPush += (remainingMultiples * divider);
                whatToPush = dividerNames[dividers.indexOf(divider)];
              } else if (availableMultiples <= remainingMultiples) {
                console.log(availableMultiples <= remainingMultiples);
                amountToPush += (availableMultiples * divider);
                console.log(amountToPush);
                whatToPush = dividerNames[dividers.indexOf(divider)];
                console.log(whatToPush);
              }
            }
            console.log(amountToPush);
            return {
              amountToPush: amountToPush,
              whatToPush: whatToPush
            };
          }
          console.log("Amount to be returned " + amountToBeReturned);
          amountToBeReturned.push(howMuchOfWhatToPush().amountToPush);
          console.log("Amount to be returned " + amountToBeReturned);
          whatToBeReturned.push(howMuchOfWhatToPush().whatToPush);
        }
      }
      return;
    });
    console.log("Amount to be returned " + amountToBeReturned);
    amountToBeReturned.shift();
    console.log("Amount to be returned " + amountToBeReturned);

    return {
      amountToBeReturned: amountToBeReturned,
      whatToBeReturned: whatToBeReturned
    };
  }

  //If there is not enough money in the regiser to return
  if (cash - price > registerBalance) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }
  //If exactly enough money in the register
  else if (cash - price === registerBalance) {
    return {
      status: "CLOSED",
      change: [...cid]
    };
  }
  //If there is more money in the register
  else if (cash - price < registerBalance) {
    console.log(cash - price);
    //console.log(registerBalance);

    //--The available money bills/coins doesnt allow to return the needed amount
    if (
      returnChange(cash - price).amountToBeReturned.reduce((sum, nextAmount) => {
        return sum + nextAmount;
      }) <
      cash - price
    ) {
      console.log(returnChange(cash - price).amountToBeReturned);
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    } else {
      let finalChangeArrays = []
      let returnedChange = returnChange(cash - price);
      for (let i = 0; i < returnedChange.whatToBeReturned.length; i++) {
        finalChangeArrays.push([returnedChange.whatToBeReturned[i], returnedChange.amountToBeReturned[i]]);
      }
      console.log(finalChangeArrays);
      return {
        status: "OPEN",
        change: [...finalChangeArrays]
      };
    }
    //--The available money bills/coins allows to return the needed amount
  }
}

console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]));