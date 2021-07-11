function myfunction() {
  document.getElementById("output").style.textAlign = "center";
  document.getElementById("output").style.borderTop = "1px solid black";
  document.getElementById("output").style.padding = "10px 10px 0 10px";
  document.getElementById("output").style.lineHeight = "1.2em";
  document.getElementById("output").style.fontWeight = "bold";
  document.getElementById("output").style.fontSize = "24px";

  var n = document.getElementById("amount").value;

  var from = document.getElementById("fromcurrency");
  var fromcurrency = from.options[from.selectedIndex].text;

  var to = document.getElementById("tocurrency");
  var tocurrency = to.options[to.selectedIndex].text;
  var output;
  var ratio;

  if (fromcurrency == "Euro" && tocurrency == "Turkish Lira") {
    output = n * 9.39;
  }
  else if (fromcurrency == "Turkish Lira" && tocurrency == "Euro") {
    output = n * 0.11;
  }
  else if (fromcurrency == "Euro" && tocurrency == "US Dollar") {
    output = n * 1.19;
  }
  else if (fromcurrency == "US Dollar" && tocurrency == "Euro") {
    output = n * 0.84;
  }
  else if (fromcurrency == "Euro" && tocurrency == "Canadian Dollar") {
    output = n * 1.48;
  }
  else if (fromcurrency == "Canadian Dollar" && tocurrency == "Euro") {
    output = n * 0.68;
  }

  ratio = output / n;
  document.getElementById("output").innerHTML =
    n + " " + fromcurrency + " = " + output.toFixed(2) + " " + tocurrency + " (" + ratio + ":1)";
}
