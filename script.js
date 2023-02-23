// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = uppercase.map((letter) => letter.toLowerCase());
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"];

// random number generator for use in randomize the characters
function getRandomInt(max) {
  return Math.ceil(Math.random() * max)
}

function generatePassword() {
  // ask users for length of password
  var passwordLength = prompt("How long do you want your password? (8-128 characters)")
  if (passwordLength <= 7 || passwordLength >= 129) {
    alert("The length of your password must be between 8-128 characters")
    return generatePassword()
  }
  console.log(passwordLength);
  // asks user for criteria regarding password
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  console.log(includeLowercase);
  console.log(includeUppercase);
  console.log(includeNumeric);
  console.log(includeSpecial);

  if (includeLowercase === false && includeUppercase === false && includeNumeric === false && includeSpecial === false) {
    alert("Please agree to at least one of the password criteria")
    return generatePassword()
  }

  // creating structure using given criteria
  var passwordStructure = [];

  if (includeLowercase) {
    passwordStructure = passwordStructure.concat(lowercase);
  }
  if (includeUppercase) {
    passwordStructure = passwordStructure.concat(uppercase);
  }
  if (includeNumeric) {
    passwordStructure = passwordStructure.concat(numbers);
  }
  if (includeSpecial) {
    passwordStructure = passwordStructure.concat(special);
  }

  console.log(passwordStructure);

  // generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordStructure[getRandomInt(passwordStructure.length)]
  }
  return password;
}
