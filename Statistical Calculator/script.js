function clearEntries() {
    document.getElementById("numbers").value = '';
    document.getElementById("min").value = '';
    document.getElementById("max").value = '';
    document.getElementById("sum").value = '';
    document.getElementById("mean").value = '';
    document.getElementById("median").value = '';
};

function processEntries() {
    var str = document.getElementById("numbers").value;
    var numbers = str.split(",");
    // Max function.
    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };

    // Min function.
    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };

    document.getElementById("min").value = numbers.min();
    document.getElementById("max").value = numbers.max();

    // calculating sum
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
    }
    document.getElementById("sum").value = sum;

    // Calculating mean
    document.getElementById("mean").value = (sum / numbers.length).toFixed(2);

    // Sorting numbers
    numbers.sort(function (a, b) {
        return a - b;
    });
    // Calculating median
    var median;
    if (numbers.length % 2 != 0) {
        var median = parseInt(numbers[parseInt(numbers.length / 2)]);
    }
    else {
        var median = (parseInt(numbers[numbers.length / 2]) + parseInt(numbers[(numbers.length / 2) - 1])) / 2;
    }
    document.getElementById("median").value = median.toFixed(2);

};
