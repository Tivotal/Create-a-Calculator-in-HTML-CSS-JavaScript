/* Created by Tivotal */

let display = document.querySelector(".display");
let btns = document.querySelectorAll("button");
let speciaChar = ["%", "-", "+", "/", "=", "*"];
let output = "";

let calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output != "") {
    // if output has % then replace with /100 before calculating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    //clearing output
    output = "";
  } else if (btnValue === "DEL") {
    //deleting last digit of output
    output = output.toString().slice(0, -1);
  } else {
    //if output is empty && btn value is special char, then return
    if (output == "" && speciaChar.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

//click event listeners for each btn
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //calling calculate function with btn dataset value as argument
    calculate(e.target.dataset.value);
  });
});
