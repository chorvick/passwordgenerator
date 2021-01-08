// Assignment Code
var generateBtn = document.querySelector("#generate");
var upC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loC = upC.toLowerCase();
var num = "1234567890";
var spC = "<>,.)(*&^%$#@!`[]{};':";  //23 total
var elementsof = ""; // make sure this starts empty also -we will fill with user choices so function will run correctly
var length = 0;
var answer = "";/// make sure everything starts empty


var length = prompt("Please enter a number between 8 and 128 for the length of your password.")

///below we test for a number between 8 and 128 while loop works unless user inputs strings
///improved check of user input but not perfect 

while (length < 8 || length > 128) {
    var length = prompt("SORRY - Please try again with a number between 8 and 128");
}

while (isNaN(length)) {
    var length = prompt("SORRY - Please try again with a number between 8 and 128");
}

while (length == 0 || length == null) {
    var length = prompt("SORRY - Please try again with a number between 8 and 128");
}




var selecthi = confirm("Should your password contain upper case letters ?");

var selectlow = confirm("Should your password contain lower case letters ?");

var selectnum = confirm("Should your password contain numbers ?");

var selectsym = confirm("Should your password contain symbold and special charachters ?");
////


/// make function to generate password based on the users selections

function pw() {

    if (selecthi) {
        elementsof += upC;
    }
    if (selectlow) {
        elementsof += loC;
    }
    if (selectnum) {
        elementsof += num;
    }
    if (selectsym) {
        elementsof += spC;
    }

    for (i = 0; i < length; i++) {
        answer += elementsof.charAt(Math.floor(Math.random() * elementsof.length));
    }
    return answer;
}





//Write password to the #password input
function writePassword() {
    // var password = generatePassword();
    var password = pw();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//

