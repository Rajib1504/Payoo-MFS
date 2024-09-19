// console.log("angta added");
//step-1 event handler:
const btnLogin = document
  .getElementById("btnLogin")
  .addEventListener("click", function (event) {
    //setp-2 prevent Defaut behaviour (prevent reloading browser):
    event.preventDefault();
    //vejal for beginners: when we are entering the value in the inputs then output is not coming....why?
    //     note:Because this value is getting store in form and form used to take input and do work in backend and doing one reload. so if you don't want that reload then there are the method name "event.preventDefauld()" its not allowing browser to reload so we are getting the value.
    console.log("login btn clicked");
    //step-3 get the phone number:
  });
