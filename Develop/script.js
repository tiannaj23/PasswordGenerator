// Assignment code here
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("") // "ABC" => ["A", "B", "C"]
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split("")
var numbers = '1234567890'.split("")
var symbols = '!@#$%^&*()'.split("")

// Get references to the #generate element
function generatePassword() {
var characters = []
var answer = ""
var passLength = prompt('How long do you want your password to be? It needs to be between 8 - 128 characters.')
if(passLength < 8 || passLength > 128) {
  alert("You must have a password between 8 - 128 characters, Please retry")
  generatePassword()
} else {
  if(confirm("Do you want uppercase characters in your password")) {
    characters = characters.concat(upperCase)
  }
  if(confirm("Do you want lowercase characters in your password?")) {
    characters = characters.concat(lowerCase)
  }
  if(confirm("Do you want numbers in your password?")) {
    characters = characters.concat(numbers)
  }
  if(confirm("Do you want symbols in your password?")) {
    characters = characters.concat(symbols)
  }
  if(characters.length === 0) {
    alert("You have to have at least one character type, to be able to create a password, Please retry")
    generatePassword()
  } else {
    for(let i = 0; i < passLength; i++) {
      var random = Math.floor(Math.random() * characters.length)
      answer += characters[random]
    }
    return answer
  }
}
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
