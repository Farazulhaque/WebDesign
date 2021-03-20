function calculate() {
    document.getElementById("total").disabled = false;
  var operator = document.getElementById("operator").value;
  a = parseInt(document.getElementById("input1").value);
  b = parseInt(document.getElementById("input2").value);
  switch (operator) {
    case "+":
      total = a + b;
      document.getElementById("total").value = total;
      break;
    case "-":
      total = a - b;
      document.getElementById("total").value = total;
      break;
    case "*":
      total = a * b;
      document.getElementById("total").value = total;
      break;
    case "/":
      total = a / b;
      document.getElementById("total").value = total;
      break;
    default:
      total = "Invalid Input";
      document.getElementById("total").value = total;
  }
}
