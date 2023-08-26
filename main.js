const randomNumber = (n) => {
  return Math.floor(Math.random() * n);
};

function handleTryClick(e) {
  e.preventDefault();

  const inputNumber = document.querySelector("#inputNumber").value;

  if (randomN == Number(inputNumber)) {
    toogleScreen();
    document.querySelector(
      "h2"
    ).innerText = `Acertou em ${attempts} tentativas`;
  } else {
    alert(`O numero certo era ${randomN} e levou ${attempts}`);
  }
  attempts++;
}

function handleAgainClick() {
  inputNumber.value = "";
  attempts = 1;
  toogleScreen();
  randomN = randomNumber(11);
}

function toogleScreen() {
  screen1.classList.toggle("hidden");
  screen2.classList.toggle("hidden");
}

const pressEnter = (e) => {
  if (e.key == "Enter" && screen2.classList.contains("hidden")) {
    handleTryClick();
  } else if (e.key == "Enter" && screen1.classList.contains("hidden")) {
    handleAgainClick();
  }
};

let attempts = 1;
let randomN = randomNumber(11);
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
btnTry.addEventListener("click", handleTryClick);
btnAgain.addEventListener("click", handleAgainClick);
document.addEventListener("keydown", pressEnter);
