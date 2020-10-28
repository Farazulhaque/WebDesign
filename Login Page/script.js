var myInput = document.getElementById("psw");
//TASK 3.c - create a variable called letter and assign it the html element with the id  letter
letter = document.getElementById("letter");
//TASK 3.d - create a variable called capital and assign it the html element with the id capital
capital = document.getElementById("capital");
//TASK 3.e - create a variable called number and assign it the html element with the id number
number = document.getElementById("number");
//TASK 3.f - create a variable called special and assign it the html element with the id special
special = document.getElementById("special");
//TASK 3.g - create a variable called length and assign it the html element with the id length
length = document.getElementById("length");
// When the user clicks on the password field, show the message box
// TASK 3.h - replace "aaaa" with the property that triggers an event when the password input box receives focus
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
// TASK 3.i - replace "bbbb" with the property that triggers an event when the password input box loses focus
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
// TASK 3.j - replace "cccc" with the property that triggers an event when the user releases a key in the input box
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate special characters
  //TASK 3.k - replace "dddd" with the proper regex pattern to match the special characters
  var specialCharacters = /(?=.*[!@#\$%\^&\*])/g;
  if (myInput.value.match(specialCharacters)) {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }

  // Validate length
  //TASK 3.l = replace "eeee" with the correct value to check the string length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
