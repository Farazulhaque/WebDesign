document.getElementById("generate").addEventListener("click", generatePassword);


function generatePassword() {
    var passwordlength = parseInt(document.getElementById("num").value);
    var passtext = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-/";
    var generatedRandomPassword = "";
    for (var i = 0; i <= passwordlength; i++) {
        var indx = Math.floor(Math.random() * passtext.length);
        generatedRandomPassword += passtext.substring(indx, indx + 1);
    }
    document.getElementById("password").value = generatedRandomPassword;
}