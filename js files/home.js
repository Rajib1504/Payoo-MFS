console.log("home added");
// step -1  target the btn and prevent default...
const submit = document
  .getElementById("submit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("submit clicked");
    //     step-2 adding cash
    const addCash = document.getElementById("addCash").value;
    console.log(addCash);
    //     step-3 add pin
    const enterPin = document.getElementById("enterPin").value;
    console.log(enterPin);
  });
