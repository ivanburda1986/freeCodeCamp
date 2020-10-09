function checkCashRegister(price, cash, cid) {

  //Variables
  let amountToReturn = cash - price;
  let registerFromHighest = cid.reverse();
  const dividers = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const dividerNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

  //Calculate total money available in the register
  function countRegisterBalance(cid) {
    let total = 0;
    cid.forEach((drawer) => {
      total = total + drawer[1];
    });
    return Number(parseFloat(total).toFixed(2));
  }
  let registerBalance = countRegisterBalance(cid);

  //RETURN AVAILABLE COINS AND BILLS UP TO THE AMOUNT THAT SHOULD BE RETURNED
  let individualChangeAmountsToBeReturned = [];
  let individualChangeNamesToBeReturned = [];

  //Return current sum of the individual amounts already added to what should be returned
  function sumToBeReturned() {
    if (individualChangeAmountsToBeReturned.length === 0) {
      return 0;
    } else {
      return individualChangeAmountsToBeReturned.reduce((sum, nextAmount) => {
        return sum + nextAmount;
      });
    }
  }

  //How much to push from the specific bill/coin height
  function howMuchToUseofTheSpecificBillCoinHeight(i) {
    let howMuchToUse = 0;
    let whatIsBeingUsed;
    let remainingAmountToReturn = ((amountToReturn * 100 - sumToBeReturned() * 100) / 100);

    let timesRemainingAmountToReturnGetDividedBySpecificBillCoinHeight = parseInt(remainingAmountToReturn / dividers[i]); //1
    let availableOfTheSpecificBillCoinHeight = registerFromHighest[dividers.indexOf(dividers[i])][1];
    let availableMultiplesOfSpecificBillCoinHeight = parseInt(availableOfTheSpecificBillCoinHeight / dividers[i]); //11

    if (availableMultiplesOfSpecificBillCoinHeight > 0 && availableMultiplesOfSpecificBillCoinHeight > timesRemainingAmountToReturnGetDividedBySpecificBillCoinHeight) {
      howMuchToUse += (timesRemainingAmountToReturnGetDividedBySpecificBillCoinHeight * dividers[i]);
      whatIsBeingUsed = dividerNames[dividers.indexOf(dividers[i])];
    } else if (availableMultiplesOfSpecificBillCoinHeight > 0 && availableMultiplesOfSpecificBillCoinHeight <= timesRemainingAmountToReturnGetDividedBySpecificBillCoinHeight) {
      howMuchToUse += (availableMultiplesOfSpecificBillCoinHeight * dividers[i]);
      whatIsBeingUsed = dividerNames[dividers.indexOf(dividers[i])];
    }

    return {
      howMuchToUse: howMuchToUse,
      whatIsBeingUsed: whatIsBeingUsed
    };

  }

  //Find out how each set of coins and bills available in the register can contribute towards the amount that should be returned
  function individualRegisterAmountsUsage() {
    for (let i = 0; i < cid.length; i++) {
      //The remaining part of the sum-to-be-returned can get at least partially covered by the bill/coin of the specific height
      if (parseInt((amountToReturn - sumToBeReturned()) / dividers[i]) >= 0) {
        howMuchToUseofTheSpecificBillCoinHeight(i)

      }
      //The remaining part of the sum-to-be-returned CANNOT (not even partially) covered by the bill/coin of the specific height
      else {

      }

    }
  }



  function returnChange(amountToReturn) {




  };



  //Evaluate the result
  function returnFinalStatement() {
    //1] If there is not enough money in the regiser to return
    if (amountToReturn > registerBalance) {
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    }

    //2] If exactly enough money in the register
    else if (amountToReturn === registerBalance) {
      return {
        status: "CLOSED",
        change: [...cid]
      };
    }

    //3] If there is more than enough money in the register
    else if (amountToReturn < registerBalance) {

      //3.1] The available money bills/coins doesnt allow to return the needed amount
      if (
        returnChange(amountToReturn).individualChangeAmountsToBeReturned.reduce((sum, nextAmount) => {
          return sum + nextAmount;
        }) <
        amountToReturn
      ) {
        return {
          status: "INSUFFICIENT_FUNDS",
          change: []
        };
      }
      //3.2] The available money bills/coins allows to return the needed amount
      else {
        let setOfChangeToBeReturned = []
        let returnedChange = returnChange(amountToReturn);
        for (let i = 0; i < returnedChange.individualChangeNamesToBeReturned.length; i++) {
          setOfChangeToBeReturned.push([returnedChange.individualChangeNamesToBeReturned[i], returnedChange.individualChangeAmountsToBeReturned[i]]);
        }
        return {
          status: "OPEN",
          change: [...setOfChangeToBeReturned]
        };
      }

    }
  }


}



console.log(checkCashRegister(19.5, 20, [
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