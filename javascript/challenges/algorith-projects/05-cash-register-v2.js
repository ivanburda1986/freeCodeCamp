function checkCashRegister(price, cash, cid) {

  //Variables
  let amountToReturn = cash - price;
  let registerFromHighest = cid.reverse();
  const dividers = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const dividerNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

  //The final result to be returned
  let checkCashRegisterResult;

  //Calculate total money available in the register
  function countRegisterBalance(cid) {
    let total = 0;
    cid.forEach((drawer) => {
      total = total + drawer[1];
    });
    // console.log("Total register balance: " + Number(parseFloat(total).toFixed(2)));
    return Number(parseFloat(total).toFixed(2));
  }
  let registerBalance = countRegisterBalance(cid);


  //GIVE ME AVAILABLE COINS AND BILLS UP TO THE AMOUNT THAT SHOULD BE RETURNED
  //Variables for holding data that will be returned
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

    let usageOfSpecificBillCoinHeight = {
      howMuchToUse: howMuchToUse,
      whatIsBeingUsed: whatIsBeingUsed
    }

    // console.log("How much of what to use: " + usageOfSpecificBillCoinHeight.whatIsBeingUsed);
    // console.log("How much of what to use: " + usageOfSpecificBillCoinHeight.howMuchToUse);

    return usageOfSpecificBillCoinHeight;

  }

  //Find out how coins/bills of each height available in the register can contribute towards the amount that should be returned
  function individualRegisterAmountsUsage() {
    for (let i = 0; i < cid.length; i++) {
      //The remaining part of the sum-to-be-returned can get at least partially covered by the bill/coin of the specific height
      if (parseInt((amountToReturn - sumToBeReturned()) / dividers[i]) > 0) {
        individualChangeAmountsToBeReturned.push(howMuchToUseofTheSpecificBillCoinHeight(i).howMuchToUse);
        individualChangeNamesToBeReturned.push(howMuchToUseofTheSpecificBillCoinHeight(i).whatIsBeingUsed);
      }

    }
    let usageOfIndividualRegisterAmounts = {
      individualChangeAmountsToBeReturned: individualChangeAmountsToBeReturned,
      individualChangeNamesToBeReturned: individualChangeNamesToBeReturned
    };
    // console.log("Individual register-amount usage: " + usageOfIndividualRegisterAmounts.individualChangeAmountsToBeReturned);
    // console.log("Individual register-amount usage: " + usageOfIndividualRegisterAmounts.individualChangeNamesToBeReturned);
    getEvaluation(usageOfIndividualRegisterAmounts);
  }

  //Evaluate the result
  function getEvaluation(returnChangeOutput) {
    // console.log("Final evaluation received:");
    // console.log(returnChangeOutput);
    let evaluation;

    //1] If there is not enough money in the regiser to return
    if (amountToReturn > registerBalance) {
      evaluation = {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    }

    //2] If exactly enough money in the register
    else if (amountToReturn === registerBalance) {
      evaluation = {
        status: "CLOSED",
        change: [...cid].reverse()
      };
    }

    //3] If there is more than enough money in the register
    else if (amountToReturn < registerBalance) {

      //3.1] The available money bills/coins doesnt allow to return the needed amount
      if (
        returnChangeOutput.individualChangeAmountsToBeReturned.reduce((sum, nextAmount) => {
          return sum + nextAmount;
        }) <
        amountToReturn
      ) {
        evaluation = {
          status: "INSUFFICIENT_FUNDS",
          change: []
        };
      }
      //3.2] The available money bills/coins allows to return the needed amount
      else {
        let setOfChangeToBeReturned = []
        for (let i = 0; i < returnChangeOutput.individualChangeNamesToBeReturned.length; i++) {
          setOfChangeToBeReturned.push([returnChangeOutput.individualChangeNamesToBeReturned[i], returnChangeOutput.individualChangeAmountsToBeReturned[i]]);
        }
        evaluation = {
          status: "OPEN",
          change: [...setOfChangeToBeReturned]
        };
      }
    }

    return result = evaluation;
  }

  //Triggers the fist function to which other functions are chained. The oucome of the chain is a value set to the "checkCashRegisterResult" variable.
  individualRegisterAmountsUsage();

  //Return the final result
  return checkCashRegisterResult;

}



console.log(checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]));