// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// Character arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var confirmLength = "";
var confirmNumber;
var confirmSpecialChar;
var confirmLowerCase;
var confirmUpperCase;

function generatePassword() {
    // Series of prompts for criteria
    var confirmLength = (prompt("How many characters would you like in your password?"));

    while(confirmLength < 7 || confirmLength > 129){
        // choose length between 8 and 128 characters
        alert("Password length must be between 8 and 128 characters, try again");
        var confirmLength = (prompt("How many characters would you like in your password?"));
        }

        alert("Your password will have " + confirmLength + " characters");
    

    // Which criteria to include 
    var confirmNumber = confirm("Would you like to use numbers in your password?");
    var confirmSpecialChar = confirm("Would you like to use special characters in your password?");
    var confirmLowerCase = confirm("Would you like to use lower case characters in your password?");
    var confirmUpperCase = confirm("Would you like to use upper case characters in your password?");
    
    while(confirmNumber === false && confirmSpecialChar === false && confirmLowerCase === false && confirmUpperCase === false){
        alert("Your password must contain at least one parameter, try again!");
        var confirmNumber = confirm("Would you like to use numbers in your password?");
        var confirmSpecialChar = confirm("Would you like to use special characters in your password?");
        var confirmLowerCase = confirm("Would you like to use lower case characters in your password?");
        var confirmUpperCase = confirm("Would you like to use upper case characters in your password?");
        }

        // create random password through for loop
    var passwordChar = []

    if (confirmNumber) {
        passwordChar = passwordChar.concat(number)
    }
    if (confirmSpecialChar) {
        passwordChar = passwordChar.concat(specialChar)
    }
    if (confirmLowerCase) {
        passwordChar = passwordChar.concat(lowerCase)
    }
    if (confirmUpperCase) {
        passwordChar = passwordChar.concat(upperCase)
    }
    console.log(passwordChar)

    var randomPass = "";

    for (var i = 0; i < confirmLength; i++) {
        randomPass = randomPass + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        console.log(randomPass)
      }
      return randomPass;
    
}
    
    



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

