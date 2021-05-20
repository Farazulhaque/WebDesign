function highlight() {
  this.className = "yummy";
}
var list = document.getElementById("fruits");
let items = list.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
  items[i].onclick = highlight;
  console.log(items[i]);
}

function addFruit() {
  var newFruit = document.getElementById("txtFruit").value;
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerText == newFruit) {
      alert("Fruit already in the list");
      return;
    }
  }
  var newElement = document.createElement("li");
  newElement.onclick = highlight;
  var newText = document.createTextNode(newFruit);
  newElement.appendChild(newText);
  var list = document.getElementById("fruits");
  list.appendChild(newElement);
}

function clearall() {
  let items = document.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].className = "";
  }
}
