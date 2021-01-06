// Assignment Code
var generateBtn = document.querySelector("#generate");
var upC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loC = upC.toLowerCase();
var num = "1234567890";
var spC = "<>,.)(*&^%$#@!`[]{};':";  //23 total
var password = ""; // make sure password field is empty

var length = prompt("Please enter a number between 8 and 128 for the length of your password.")

///below we test for a number between 8 and 128

if (length < 8 || length > 128) {
    var length = prompt("SORRY - Please try again with a number between 8 and 128");
}

var selectlow = prompt("Do you want to use lower case letters in your password ?");



// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
