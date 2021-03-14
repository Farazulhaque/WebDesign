function calculate() {
    cost1 = parseFloat(document.getElementById("items1").value) * Number(document.getElementById("quantity1").value);
    cost2 = parseFloat(document.getElementById("items2").value) * Number(document.getElementById("quantity2").value);
    cost3 = parseFloat(document.getElementById("items3").value) * Number(document.getElementById("quantity3").value);
    cost4 = parseFloat(document.getElementById("items4").value) * Number(document.getElementById("quantity4").value);
    subtotal = cost1 + cost2 + cost3 + cost4;
    pst = subtotal * 0.06;
    gst = subtotal * 0.05;
    total = subtotal + pst + gst;
    document.getElementById("output1").value = cost1.toFixed(2);
    document.getElementById("output2").value = cost2.toFixed(2);
    document.getElementById("output3").value = cost3.toFixed(2);
    document.getElementById("output4").value = cost4.toFixed(2);
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("pst").value = pst.toFixed(2);
    document.getElementById("gst").value = gst.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}