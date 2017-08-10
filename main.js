console.log("talking");

var numbers = Array.prototype.slice.call(document.getElementsByClassName("number"), 0);

var operators = Array.prototype.slice.call(document.getElementsByClassName("operator"), 0);

var buttons = document.getElementsByClassName('button')

let equals = document.getElementById('equals');
equals.addEventListener('click', calculate, false);

let clear = document.getElementById('C');
clear.addEventListener('click', clearScreen, false);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', inputNumbers, false);
  }

  function inputNumbers() {
    console.log("ack!");
  }

function calculate(){
  let result = eval(input);
  screen.innerHTML = result;
  console.log("result is: "+result);
  input = result;
}

function clearScreen() {
  screen.innerHTML = '';
  input = '';
}
