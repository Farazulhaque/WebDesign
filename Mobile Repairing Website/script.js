function myFunction() {
  first = document.getElementById("fname").value;
  last = document.getElementById("lname").value;
  mail = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  var e = document.getElementById("platform");
  var strUser = e.options[e.selectedIndex].text;
  document.getElementById("outputline1").innerHTML =
    "A repair order has been placed for: " + first + " " + last;
  document.getElementById("outputline2").innerHTML = "Email Address: " + mail;
  document.getElementById("outputline3").innerHTML = "Phone: " + phone;
  if (strUser == "Android") {
    document.getElementById("outputline4").innerHTML = "Cost: $79.99";
  } else {
    document.getElementById("outputline4").innerHTML = "Cost: $99.99";
  }
}
