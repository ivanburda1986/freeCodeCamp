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
    let toBeReturned = [0];
    let registerFromHighest = cid.reverse();
    const dividers = [100, 20, 10, 5, 1, 0.25, 0.1, 0.5, 0.01];

    function sumToBeReturned() {
      return toBeReturned.reduce((sum, nextAmount) => {
        return sum + nextAmount;
      });
    }

    //Go through the available money units and use them to pay out from highest to lowest until the return sum is reached
    dividers.forEach((divider) => {
      //As long as the sum of money already put aside for the payout is lower then the return sum, keep adding
      if (sumToBeReturned() < howMuchToReturn) {
        if (parseInt(howMuchToReturn / divider) > 0) {
          toBeReturned.push(registerFromHighest[dividers.indexOf(divider)][1]); //55 / parseInt((howMuchToReturn-sumToBeReturned())/divider)*divider
        }
      }
    });
    toBeReturned.shift();

    return toBeReturned;
  }

  //If there is not enough money in the regiser to return
  if (cash - price > registerBalance) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  //If exactly enough money in the register
  else if (cash - price === registerBalance) {
    return { status: "CLOSED", change: [...cid] };
  }
  //If there is more money in the register
  else if (cash - price < registerBalance) {
    //--The available money bills/coins doesnt allow to return the needed amount
    //--The available money bills/coins allows to return the needed amount
    return returnChange(cash - price);
  }
}

console.log(
  checkCashRegister(9.75, 200, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
