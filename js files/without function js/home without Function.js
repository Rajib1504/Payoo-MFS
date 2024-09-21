// console.log("home added");
// Add cash part :
// step -1  target the btn and prevent default...
const submit = document
  .getElementById("submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //     console.log("submit clicked");
    //     step-2 adding cash
    const addCash = document.getElementById("addCash").value;

    //     step-3 add pin
    const enterPin = document.getElementById("enterPin").value;
    // step-4 checking the pin
    if (enterPin == "13226") {
      console.log("your money is ading now");
      // step-5 get the current total amount
      const displayAmount = document.getElementById("displayAmount").innerText; // because this value is inside a div not in a input tag so we can't to get the inner value.
      // console.log(displayAmount);
      // step -6 get new money in display
      //problem is this values are the string so you need to convert them in number then you can do it.
      // step-7 converting strings to number :
      const displayAmountNum = parseFloat(displayAmount); // display now in number
      // console.log(displayAmountNum);
      const addCashNum = parseFloat(addCash); // this add cash also in number now
      // console.log(addCashNum);
      // step-8 do the total and push it to the UI
      const newTotal = displayAmountNum + addCashNum;
      // console.log(newTotal);
      document.getElementById("displayAmount").innerText = newTotal;
    } else if (enterPin != "13226") {
      alert("show me your ID proofe");
    } else {
      alert("fail to add money please try again");
    }
    document.getElementById("enterPin").value = "";
    document.getElementById("addCash").value = "";
  });

// cash out part :
document.getElementById("collect").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("btn working");
  const cashOut = document.getElementById("cashOut").value;
  console.log(cashOut);
  const cashOutNum = parseFloat(cashOut);
  console.log(cashOutNum);
  const pin = document.getElementById("enterPin2").value;
  console.log(pin);
  const pinNum = parseFloat(pin);
  console.log(pinNum);
  //   wrong way to check /

  if (pinNum == "13226") {
    const displayAmount = document.getElementById("displayAmount").innerText;
    console.log(displayAmount);
    const displayAmountNum = parseFloat(displayAmount);
    const remain = displayAmountNum - cashOutNum;
    document.getElementById("displayAmount").innerText = remain;
  } else {
    alert("something went wrong please contact your bank");
  }
  document.getElementById("enterPin").value = "";
  document.getElementById("addCash").value = "";
});
