let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", function () {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", function () {
  passBox.value = generatePassword();
});

let lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCharacters = "0123456789";
let symbolCharacters = "!@#$%^&*()_+";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerCharacters : "";
  allChars += uppercase.checked ? upperCharacters : "";
  allChars += numbers.checked ? numberCharacters : "";
  allChars += symbols.checked ? symbolCharacters : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyIcon.addEventListener("click", function () {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Copied";
    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
