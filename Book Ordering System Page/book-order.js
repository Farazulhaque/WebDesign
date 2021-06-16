function calculateTotal() {
    const NumberOfBooks = 5;
    var price;
    var quantity;
    var total = 0;
    var grandTotal;
    // To get the price, quantity of each row
    // and calculate the total of each row
    // and give the value of total for each row
    for (let i = 1; i <= NumberOfBooks; i++) {
        price = Number(document.getElementById("book" + i + "_price").value).toFixed(2);
        quantity = document.getElementById("book" + i + "_quan").value;
        total = document.getElementById("book" + i + "_total");
        total.value = (price * quantity).toFixed(2);
    }
    grandTotal = 0;
    // To get the total value stored in each row
    // and add it to grandTotal on each iteration
    for (let i = 1; i <= NumberOfBooks; i++) {
        grandTotal += parseFloat(document.getElementById("book" + i + "_total").value);
    }
    // if value is negative
    if (grandTotal < 0) {
        document.getElementById("grandtotal").value = 0;
        alert("Please enter only positive values");
    }
    else {
        document.getElementById("grandtotal").value = grandTotal.toFixed(2);
    }
}