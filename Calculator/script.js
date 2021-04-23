//function that display value
function dis(val) {
  document.getElementById("result").value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  if (document.getElementById("result").value === "") {
    document.getElementById("result").style.fontSize = "42px";
    document.getElementById("result").style.lineHeight = "7rem";
    document.getElementById("result").value = "Please Enter a Value";
  } else {
    document.getElementById("result").value = y;
  }
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
}
