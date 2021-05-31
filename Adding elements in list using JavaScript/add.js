function addStudent() {
  fullname = document.getElementById("fullName").value;
  id = document.getElementById("studentId").value;
  problem = document.getElementById("problem").value;
  if (fullname == "") {
    document.getElementById("fullName_msg").innerHTML =
      "Full Name must be filled";
  } else if (id == "") {
    document.getElementById("studentId_msg").innerHTML =
      "Student Id must be filled";
  } else if (problem == "") {
    document.getElementById("problem_msg").innerHTML = "Problem must be filled";
  }
  if (fullname != "" && id != "" && problem != "") {
    document.getElementById("fullName_msg").innerHTML = "";
    document.getElementById("studentId_msg").innerHTML = "";
    document.getElementById("problem_msg").innerHTML = "";
    var ol = document.getElementById("studentList");
    var li = document.createElement("li");
    var list ="Name: " + fullname + ",  Student Id: " + id + ",  Problem: " + problem;
    var l = document.createTextNode(list);
    li.appendChild(l);
    ol.appendChild(li);
  }
}
