// Assignment Code
var generateBtn = document.querySelector("#generate");
var upC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var loC = upC.toLowerCase();
var num = "1234567890";
var spC = "<>,.)(*&^%$#@!`[]{};':";  //23 total
var elementsof = ""; // make sure this starts empty also -we will fill with user choices so function will run correctly
var length = 0;
var answer = "";/// make sure everything starts empty



////


/// make function to generate password based on the users selections  by putting the qualifying questions inside 
///function now the prompts no longer show up as soon as you load the page,  
/// for this assignment the pmompts and questions to user how they want their password
//  should be inside this function so it starts to work when the button is pressed and
/// so it does not generate multiple passwords if the button is pressed multiple times 


///define our function pw which first asks questions then makes the password to user specifications

function pw() {

    var length = prompt("Please enter a number between 8 and 128 for the length of your password.")

    ///below we test for a number between 8 and 128 while loop works unless user inputs strings
    ///improved check of user input , or statement to make sure between 8 and 128
    /// used isNaN to prevent string entry - also a test for zero or null added and working 

    while (length < 8 || length > 128) {
        var length = prompt("SORRY - Please try again with a number between 8 and 128");
    }

    while (isNaN(length)) {
        var length = prompt("SORRY - Please try again with a number between 8 and 128");
    }

    while (length == 0 || length == null) {
        var length = prompt("SORRY - Please try again with a number between 8 and 128");
    }


    //here the user can select if they want upper and/or lower case , numbers and special charachters in their password
    //// this next part of the function uses if statements to make sure the password is made as requested


    var selecthi = confirm("Should your password contain upper case letters ?");

    var selectlow = confirm("Should your password contain lower case letters ?");

    var selectnum = confirm("Should your password contain numbers ?");

    var selectsym = confirm("Should your password contain symbold and special charachters ?");

    /// adding test to make sure the user selected at least one of the four options , if all 
    /// four evaluate false it notifies them and asks them to try again

    // if ((selecthi) && (selectlow) && (selectnum) && (selectsym) == "false") {
    //     alert("Sorry you have to pick at least one of the four conditions ! Please try again.");

    //     var selecthi = confirm("Should your password contain upper case letters ?");

    //     var selectlow = confirm("Should your password contain lower case letters ?");

    //     var selectnum = confirm("Should your password contain numbers ?");

    //     var selectsym = confirm("Should your password contain symbold and special charachters ?");
    // }







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
    ////  the for loop uses Math.random to put the password the user requested into 'answer'
    for (i = 0; i < length; i++) {
        answer += elementsof.charAt(Math.floor(Math.random() * elementsof.length));
    }
    return answer;
}





//Write password to the #password input
function writePassword() {

    var password = pw();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//
//




generateBtn.addEventListener("click", writePassword);



