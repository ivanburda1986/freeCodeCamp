function checkCashRegister(price, cash, cid) {
  (function registerBalance(cid) {
    let total = 0;
    cid.forEach((drawer) => {
      total = total + drawer[1];
    });
    console.log(total);
  })(cid);
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
  ["ONE HUNDRED", 100],
]);
