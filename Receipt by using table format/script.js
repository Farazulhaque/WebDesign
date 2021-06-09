function calculate() {
    var p1;
    var p2;
    var p3;
    var p4;
    var u1;
    var u2;
    var u3;
    var u4;
    var u1q;
    var u2q;
    var u3q;
    var u4q;
    var i1p = 0;
    var i2p = 0;
    var i3p = 0;
    var i4p = 0;
    var total;
    item1 = document.getElementById("item1");
    item2 = document.getElementById("item2");
    item3 = document.getElementById("item3");
    item4 = document.getElementById("item4");
    i1p1 = document.getElementById("i1p1");
    i1p2 = document.getElementById("i1p2");
    i1p3 = document.getElementById("i1p3");
    i1p4 = document.getElementById("i1p4");
    i2p1 = document.getElementById("i2p1");
    i2p2 = document.getElementById("i2p2");
    i2p3 = document.getElementById("i2p3");
    i2p4 = document.getElementById("i2p4");

    if (item1.checked == true) {
        document.getElementById("i1total").disabled = false;

        if (i1p1.checked == true) {
            p1 = parseInt(i1p1.value);
        } else if (i1p2.checked == true) {
            p1 = parseInt(i1p2.value);
        } else if (i1p3.checked == true) {
            p1 = parseInt(i1p3.value);
        } else if (i1p4.checked == true) {
            p1 = parseInt(i1p4.value);
        }
        u1 = document.getElementById("u1");
        u1q = parseInt(u1.options[u1.selectedIndex].value);
        i1p = p1 * u1q;
        document.getElementById("i1total").value = "$ " + i1p;
    }
    if (item2.checked == true) {
        document.getElementById("i2total").disabled = false;

        if (i2p1.checked == true) {
            p2 = parseInt(i2p1.value);
        } else if (i2p2.checked == true) {
            p2 = parseInt(i2p2.value);
        } else if (i2p3.checked == true) {
            p2 = parseInt(i2p3.value);
        } else if (i2p4.checked == true) {
            p2 = parseInt(i2p4.value);
        }
        u2 = document.getElementById("u2");
        u2q = parseInt(u2.options[u2.selectedIndex].value);
        i2p = p2 * u2q;
        document.getElementById("i2total").value = "$ " + i2p;
    }
    if (item3.checked == true) {
        document.getElementById("i3total").disabled = false;

        if (i3p1.checked == true) {
            p3 = parseInt(i3p1.value);
        } else if (i3p2.checked == true) {
            p3 = parseInt(i3p2.value);
        } else if (i3p3.checked == true) {
            p3 = parseInt(i3p3.value);
        } else if (i3p4.checked == true) {
            p3 = parseInt(i3p4.value);
        }
        u3 = document.getElementById("u3");
        u3q = parseInt(u3.options[u3.selectedIndex].value);
        i3p = p3 * u3q;
        document.getElementById("i3total").value = "$ " + i3p;
    }
    if (item4.checked == true) {
        document.getElementById("i4total").disabled = false;

        if (i4p1.checked == true) {
            p4 = parseInt(i4p1.value);
        } else if (i4p2.checked == true) {
            p4 = parseInt(i4p2.value);
        } else if (i4p3.checked == true) {
            p4 = parseInt(i4p3.value);
        } else if (i4p4.checked == true) {
            p4 = parseInt(i4p4.value);
        }
        u4 = document.getElementById("u4");
        u4q = parseInt(u4.options[u4.selectedIndex].value);
        i4p = p4 * u4q;
        document.getElementById("i4total").value = "$ " + i4p;
    }
    total = i1p + i2p + i3p + i4p;
    if (total > 500) {
        total = total - total * 0.15;
    }
    document.getElementById("total").innerHTML = "$ " + total;
}