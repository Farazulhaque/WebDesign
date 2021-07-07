function validate() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var phoneRe = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    var email = document.getElementById("email").value;
    var emailRe = /^\S+@\S+\.\S+$/;
    var gender = document.getElementById("gender");
    var amount = document.getElementById("amount").value;
    var fund = document.getElementById("fund");

    if (name == "") {
        alert("Name field must not be empty");
    }
    else if (phoneRe.test(phone) == false) {
        alert("Phone number field must be of the same format");
    }
    else if (emailRe.test(email) == false || email == "") {
        alert("Enter email of the same format");
    }
    else if (gender.value == "notValid") {
        alert("Select your gender");
    }
    else if (fund.value == "notValid") {
        alert("Select your fund")
    }
    else {
        alert("You have entered the following details: \nFull Name: " + name + "\nPhone number: " + phone + " \nEmail: " + email + "\nGender: " + gender.value + "\nAmount: " + amount + "\nFund Accomodation: " + fund.value);
    }
}