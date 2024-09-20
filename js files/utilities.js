/**
 * this file is for function which we are using repetaedely
 *
 */
// console.log("function is added here");

// This function is doing the work for a specific id :
//
// function getInputFildValueById() {
//   const value = document.getElementById("addCash").value;
//   return value;
// }
//
// This is the function which will give the value from all types input by sing id:by using parameter and argument.
function inputValue(id) {
  let valueOfInp = document.getElementById(id).value;
  let valueInputNum = parseFloat(valueOfInp);
  return valueInputNum;
}

// This is the function which will target the all types of id :
function targetId(id) {
  const getId = document.getElementById(id);
  return getId;
}
// this function is to get the value which is inside the id :
function idValue(idV) {
  const valueOfId = document.getElementById(idV).innerText;
  return valueOfId;
}
// this function is for get the vlaue from elemetn as a string and also string to number:
function getInNumber(idName) {
  let strValue = document.getElementById(idName).innerText;
  let num = parseFloat(strValue);
  return num;
}
