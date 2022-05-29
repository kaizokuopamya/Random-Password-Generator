//declaring character combination for passwords
let uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
let numberCharacter = "0123456789";
let specialCharacter = "@#$?&<>:;()_<>";
//concatenating strings
let passwordCharacter =
  uppercaseCharacter + lowercaseCharacter + numberCharacter + specialCharacter;
let password = "";
let passlength = 15;

//declaring password fields
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let pass3 = document.getElementById("pass3");
let pass4 = document.getElementById("pass4");

//declaring image field which represents 3 dots
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

function generatePassword() {
  // we are generating 15 digit pass with for loop which starts from 1 and ends at 15
  for (let i = 1; i <= passlength; i++) {
    // our string index starts from 0 hence multiplying random number (between 0 to 1) with length of characters + 1
    let char = Math.floor(Math.random() * passwordCharacter.length + 1);
    // adding each password character in password string till out for loop ends
    password += passwordCharacter.charAt(char);
  }
  //password with desired length is returned
  return password;
}

function displayPassword() {
  //removing image to display text password
  img1.remove();
  img2.remove();
  img3.remove();
  img4.remove();

  //specifying each password field generatePassword function and keeping password string as empty so each field doesn't adds up previous password
  pass1.textContent = generatePassword();
  password = "";
  pass2.textContent = generatePassword();
  password = "";
  pass3.textContent = generatePassword();
  password = "";
  pass4.textContent = generatePassword();
  password = "";
}
