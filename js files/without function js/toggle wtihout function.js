// this js for touggle purpose

const addCashHere = document.getElementById("cashAdd");
// console.log(addCashHere);
const cashOutHere = document.getElementById("cashOuts");
// console.log(cashOutHere);
const trDetails = document.getElementById("transationDetails");
//btn of withdrawl- styles
const colBtn = document.getElementById("collect");

const btnAdd = document
  .getElementById("moneyIn")
  .addEventListener("click", function () {
    addCashHere.classList.remove("hidden");
    cashOutHere.classList.add("hidden");
  });
const moneyOut = document
  .getElementById("moneyOut")
  .addEventListener("click", function () {
    addCashHere.classList.add("hidden");
    cashOutHere.classList.remove("hidden");

    //styes are here
    colBtn.style.backgroundColor = "#e06078";
    colBtn.style.fontSize = "1.2rem";
    fontWeight = "800";
    color = "white";
    border = "2px solid grey";
    fontFamily = "timesRoman";
  });
