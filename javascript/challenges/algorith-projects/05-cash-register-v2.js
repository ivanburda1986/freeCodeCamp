//Global variables
let availableCash;
let howMuchToReturn;
let registerBalance;


//Calculates the register balance
function countRegisterBalance(cid) {
  let total = 0;
  cid.forEach((drawer) => {
    total = total + drawer[1];
  });
  return Number(parseFloat(total).toFixed(2));
}



//Return change
function returnChange(howMuchToReturn) {
  let amountToBeReturned = [0];
  let whatToBeReturned = [];
  let registerFromHighest = availableCash.reverse();
  const dividers = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  const dividerNames = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

  function sumToBeReturned() {
    return amountToBeReturned.reduce((sum, nextAmount) => {
      return sum + nextAmount;
    });
  }

  //Go through the available money units and use them to pay out from highest to lowest until the return sum is reached
  let allCashReturned = false;
  let i = 0;

  function evalChangeRecursive(){
    if(allCashReturned === false){
      if (parseInt((howMuchToReturn - sumToBeReturned()) / dividers[i]) > 0) {

      } else{

      }



      evalChangeRecursive();
    }
    else{
      console.log("All cash returned")
    }


  }






  amountToBeReturned.splice(0, 1);
  console.log("Amount to be returned" + amountToBeReturned);

  return {
    amountToBeReturned: amountToBeReturned,
    whatToBeReturned: whatToBeReturned
  };
}

//=====MAIN FUNCTION=======
function checkCashRegister(price, cash, cid) {
  //Assign the global variables
  availableCash = cid;
  howMuchToReturn = cash - price;
  registerBalance = countRegisterBalance(cid);


  //If there is not enough money in the regiser to return
  if (howMuchToReturn > registerBalance) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    };
  }
  //If exactly enough money in the register
  else if (howMuchToReturn === registerBalance) {
    return {
      status: "CLOSED",
      change: [...cid]
    };
  }
  //If there is more money in the register
  else if (howMuchToReturn < registerBalance) {
    console.log(howMuchToReturn);
    //console.log(registerBalance);

    //--The available money bills/coins doesnt allow to return the needed amount
    if (
      returnChange(howMuchToReturn).amountToBeReturned.reduce((sum, nextAmount) => {
        return sum + nextAmount;
      }) <
      howMuchToReturn
    ) {
      console.log(returnChange(howMuchToReturn).amountToBeReturned);
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      };
    }
    //--The available money bills/coins allows to return the needed amount
    else {
      let finalChangeArrays = []
      let returnedChange = returnChange(howMuchToReturn);
      for (let i = 0; i < returnedChange.whatToBeReturned.length; i++) {
        finalChangeArrays.push([returnedChange.whatToBeReturned[i], returnedChange.amountToBeReturned[i]]);
      }
      console.log(finalChangeArrays);
      return {
        status: "OPEN",
        change: [...finalChangeArrays]
      };
    }

  }


}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);