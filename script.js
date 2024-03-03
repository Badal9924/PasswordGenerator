let range = document.querySelector("#r");
let screen = document.querySelector("#screen");
let btn = document.querySelector(".btn");
let checklc = document.querySelector("#checklc");
let checkuc = document.querySelector("#checkuc");
let checknu = document.querySelector("#checknu");
let checksy = document.querySelector("#checksy");
let copybutton = document.querySelector("#copy");
let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let charLower = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%&^*";
range.addEventListener("input", () => {
  let location = document.querySelector(".passwordlength .actualsize");
  location.innerText = range.value;
});
btn.addEventListener("click", () => {
  screen.value = createPassword();
});
function createPassword() {
  let password = "";
  let allCharacter = "";
  allCharacter += checklc.checked ? charLower : "";
  allCharacter += checkuc.checked ? charUpper : "";
  allCharacter += checksy.checked ? allSymbols : "";
  allCharacter += checknu.checked ? allNumbers : "";
  let i = 1;
  while (i <= range.value) {
    password += allCharacter.charAt(
      Math.floor(Math.random() * allCharacter.length)
    );
    i++;
  }
  return password;
}
copybutton.addEventListener("click", () => {
  if (screen.value != "") {
    navigator.clipboard.writeText(screen.value);
    copybutton.title = "Password Copied";
    copybutton.innerText = "check";
    setTimeout(() => {
      copybutton.innerText = "content_copy";
      copybutton.title = "";
    }, 3000);
  }
});
