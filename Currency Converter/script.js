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

  if (fromcurrency == "Euro" && tocurrency == "Turkish Lira") {
    output = n * 9.39;
  } else if (fromcurrency == "Turkish Lira" && tocurrency == "Euro") {
    output = n * 0.11;
  }

  document.getElementById("output").innerHTML =
    n + " " + fromcurrency + " = " + output + " " + tocurrency;
}
