// ..........................NOW WE WILL DO WITHOUT REPEATATION.................
// step-1 :target Btn,give event function
// step-2:target the display,value,convert in number
// step-3: convert the strings to number
// step-4: ask in condetion
// step-5: combine it and send as inner text
// step-6: make the form empty again

const btn = targetId("submit").addEventListener("click", function (event) {
  event.preventDefault();
  // step-2
  const display = getInNumber("displayAmount");
  // step-3
  const addFild = inputValue("addCash"); //cashinput add in num
  const getPin = inputValue("enterPin"); // pin add in num
  // step-4
  if (getPin === 1234 || isNaN(getPin)) {
    // step-5
    const newValue = display + addFild;
    document.getElementById("displayAmount").innerText = newValue;

    // transation form :
    const p = document.createElement("div");
    p.innerHTML = `
    <div class = "border-l-2 border-green-600 pl-4 mb-2 ">
    <h4 class = 'text-2xl '>Deposite: ${addFild}</h4>
    <p>Last Balance: ${display}</p>
    <p>Current Balance:${newValue}</p>
    </div>
    `;

    console.log(p);
    // we sent the value to the transation by using the next line
    document.getElementById("transationDetails").appendChild(p);

    // transation form finish here
  } else {
    alert("wrong information");
  }
  // step-6
  document.getElementById("addCash").value = "";
  document.getElementById("enterPin").value = "";
});
// cash out will strt form here :
targetId("collect").addEventListener("click", function (event) {
  event.preventDefault();
  const outamount = inputValue("cashOut"); //withdraw amount
  const outPin = inputValue("enterPin2"); //pin
  const displayAm = getInNumber("displayAmount"); //display
  if (outPin === 1234) {
    const totalCashOut = displayAm - outamount;
    document.getElementById("displayAmount").innerText = totalCashOut;

    // transation form
    const history = document.createElement("div");
    history.innerHTML = `
      <div class = "border-l-2 border-red-600 pl-4 mt-4 ">
    <h4 class = 'text-2xl '>Withdrawal: ${outamount}</h4>
    <p>Last Balance: ${displayAm}</p>
    <p>Current Balance:${totalCashOut}</p>
    </div>`;
    document.getElementById("transationDetails").appendChild(history);

    // transation form
    // const transation = document.createElement("p");
    // transation.innerText = `Withdrawal amount : ${outamount} Rest Amount ${totalCashOut}`;
    // // attaching with the transation form
    // document.getElementById("transationDetails").appendChild(transation);
  } else {
    alert("your information is wrong ");
  }
  document.getElementById("cashOut").value = "";
  document.getElementById("enterPin2").value = "";
});
