function postmessage() {
  var ul = document.getElementById("blog");
  var li = document.createElement("li");
  var ele = document.getElementById("message").value;
  var x = document.createTextNode(ele);
  li.appendChild(x);
  ul.appendChild(li);
}
