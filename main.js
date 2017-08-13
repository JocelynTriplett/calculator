console.log("talking");

var numbers = Array.prototype.slice.call(document.getElementsByClassName("number"), 0);

var operators = Array.prototype.slice.call(document.getElementsByClassName("operator"), 0);

var buttons = document.getElementsByClassName('button');

let equals = document.getElementById('equals');
equals.addEventListener('click', calculate, false);

let clear = document.getElementById('C');
clear.addEventListener('click', clearScreen, false);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', inputNumbers, false);
}

  var input = '';
  function inputNumbers() {
    this.style.backgroundColor = '#DFD561';
    console.log(this);
    current_button = this;
    button_value = this.getAttribute("display");
    console.log(button_value);
    input += button_value;
    answer = document.createTextNode(input);
    screen = document.getElementById('answer');
    screen.innerHTML = '';
    screen.appendChild(answer);
    setTimeout(function() {
      if (current_button.classList.contains("operator")){
        current_button.style.backgroundColor = 'orange';}
        else current_button.style.backgroundColor = 'gray';
    },100);
  }

function calculate(){
  if (input.includes("√")) {
    console.log("there's a square root here");
    //var String=input.substring(input.lastIndexOf("√")+1,input.lastIndexOf(" "));
    var string= input.substr(0, input.indexOf('√'));
    let result = Math.sqrt(string);
    screen.innerHTML = result;
    console.log("result is: "+result);
    input = result;
  }
  else {
  let result = eval(input);
  screen.innerHTML = result;
  console.log("result is: "+result);
  input = result;
  }
}

function clearScreen() {
  screen.innerHTML = '';
  input = '';
}
