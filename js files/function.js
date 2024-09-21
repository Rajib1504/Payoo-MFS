// this js for touggle purpose
//transation target
const trDetails = document.getElementById("transationDetails");
//btn of withdrawl- styles
const colBtn = document.getElementById("collect");

// addCash form toggle ......
document.getElementById("moneyIn").addEventListener("click", function () {
  doVisible("cashAdd");
});
// widthdrawal form toggle ......
document.getElementById("moneyOut").addEventListener("click", function () {
  doVisible("cashOuts");
});
// widthdrawl from toggle....
document.getElementById("transation").addEventListener("click", function () {
  doVisible("transationDetails");
});

{
  //styes are here
  colBtn.style.backgroundColor = "#e06078";
  colBtn.style.fontSize = "1.2rem";
  fontWeight = "800";
  color = "white";
  border = "2px solid grey";
  fontFamily = "timesRoman";
}
