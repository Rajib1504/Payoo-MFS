const addCashHere = document.getElementById("cashAdd");
console.log(addCashHere);
const cashOutHere = document.getElementById("cashOuts");
console.log(cashOutHere);
//btn of withdrawl
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
    colBtn.style.backgroundColor = "#e06078";
    colBtn.style.fontSize = "1.2rem";
    colBtn.style.fontWeight = "800";
    colBtn.style.color = "white";
    colBtn.style.border = "2px solid grey";
    colBtn.style.fontFamily = "timesRoman";
  });
