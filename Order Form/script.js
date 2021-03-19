function myfunction() {
  document.getElementById("output").style.textAlign = "justify";
  document.getElementById("output").style.borderTop = "1px solid black";
  document.getElementById("output").style.padding = "10px 10px 0 10px";
  document.getElementById("output").style.lineHeight = "1.2em";

  var n = document.getElementById("nameinput").value;
  var idd = document.getElementById("indate");
  var imm = document.getElementById("inmonth");
  var iyy = document.getElementById("inyear");

  var indd = idd.options[idd.selectedIndex].text;
  var inmm = imm.options[imm.selectedIndex].text;
  var inyy = iyy.options[iyy.selectedIndex].text;

  var odd = document.getElementById("outdate");
  var omm = document.getElementById("outmonth");
  var oyy = document.getElementById("outyear");

  var ondd = odd.options[odd.selectedIndex].text;
  var onmm = omm.options[omm.selectedIndex].text;
  var onyy = oyy.options[oyy.selectedIndex].text;

  document.getElementById("output").innerHTML =
    "Thank you Mr/Ms, " +
    n +
    " for ordering from ABC Incorporation. The pick up and drop information are as following: Pickup Date: " +
    indd +
    " " +
    inmm +
    " " +
    inyy +
    " " +
    " Dropoff Date: " +
    ondd +
    " " +
    onmm +
    " " +
    onyy;
}
