values = [];

function submitgrade() {
  var inp = document.getElementById("inputtext");
  if (inp.value < 100) {
    values.push(inp.value);
    inp.value = "";
    displayRecord();
  } else {
    alert("Grade must be between 0 and 100");
  }
}

function displayRecord() {
  document.getElementById("grade").innerHTML = "Grades: " + values.join(", ");
}

function calculateaverage() {
  var i;
  var total = 0;
  var average;
  var grade;
  for (i = 0; i < values.length; i++) {
    total += parseInt(values[i]);
  }
  average = total / values.length;
  if (average >= 90) {
    grade = "A";
  } else if (average >= 80) {
    grade = "B";
  } else if (average >= 70) {
    grade = "C";
  } else if (average >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  document.getElementById("average").innerHTML =
    "Average Grade: " + average.toFixed(2) + " (" + grade + ")";
}
