// console.log("angta added");
//step-1 event handler:
// const btnLogin = document
//   .getElementById("btnLogin")
//   .addEventListener("click", function (event) {
//     //setp-2 prevent Defaut behaviour (prevent reloading browser):
//     event.preventDefault();
//     //vejal for beginners: when we are entering the value in the inputs then output is not coming....why?
//     //     note:Because this value is getting store in form and form used to take input and do work in backend and doing one reload. so if you don't want that reload then there are the method name "event.preventDefauld()" its not allowing browser to reload so we are getting the value.
//     console.log("login btn clicked");
//     //step-3 get the phone number:
//     const phone = document.getElementById("phone").value;
//     //     step-4 get the pin
//     const pin = document.getElementById("pin").value;
//     console.log(phone, pin);
//     //     step-5 make condetion to check the details :
//     //this is temporery not use this type of things for compare pin.
//     if (phone === "8583881364" && pin === "13226") {
//       console.log("all set wellcome to our universe");
//     step-6 redirect to new webpage in locally
// window.location.href = "/home.html";
//     } else {
//       alert("Please input a correct phone and pin");
//     }
//   });

// in clean way will try it again :
// step-1
document.getElementById("btnLogin").addEventListener("click", function (event) {
  // step-2
  // as we know that inside form after giving value to the input browser is getting reloaded .and we dont want it so will use .preventDefault()
  event.preventDefault();
  // step-3
  const phone = document.getElementById("phone").value;
  const pin = document.getElementById("pin").value;
  //   step-4
  //   Bad way to validate :
  if (phone == "8583881364" && pin == "13226") {
    alert("you have loging successfully");
    //     step-5 redirect to new webpage in locally
    window.location.href = "/home.html";
  } else {
    alert("please provide a valid input");
  }
});
