const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

const arrDigits = [];
arrDigits.push(secondTens, secondOnes, msHundreds, msTens);

let time = 0;

arrDigits.forEach((digit) => {
  digit.textContent = 0;
  digit.style.fontFamily = "Sans-serif";
});

//Add Start & Reset Buttons
const container = document.createElement("div");
const startBtn = document.createElement("button");
const startText = document.createTextNode("Start");
const resetBtn = document.createElement("button");
const resetText = document.createTextNode("Reset");
const arrButtons = [];
arrButtons.push(startBtn, resetBtn);

container.style.display = "flex";
container.style.justifyContent = "space-between";

arrButtons.forEach((button) => {
  button.style.width = "48%";
  button.style.marginTop = "1rem";
  button.style.padding = ".5rem 1rem";
  button.style.borderRadius = "1rem";
  button.style.fontSize = "1rem";
});

const parentElement = document.querySelector(".digits");

startBtn.appendChild(startText);
resetBtn.appendChild(resetText);

container.appendChild(startBtn);
container.appendChild(resetBtn);

parentElement.appendChild(container);

//Start button
startBtn.addEventListener("click", function start() {
  startBtn.disabled = true;
  timer();
});

//Timer function Start
const timer = () => {
  const timeTimer = setInterval(function () {
    if (time >= 10) {
      clearInterval((time = 0));
      msHundreds.textContent++;
    } else if (msHundreds.textContent == 10) {
      clearInterval((msHundreds.textContent = 0));
      secondOnes.textContent++;
    } else if (secondOnes.textContent == 10) {
      clearInterval((secondOnes.textContent = 0));
      secondTens.textContent++;
    } else if (secondTens.textContent == 1) {
      time = 0;

      arrDigits.forEach((digit) => {
        digit.style.color = "red";
      });

      startBtn.disabled = false;
    }

    msTens.textContent = time;
    time++;
  }, 10);

  //Reset button
  resetBtn.addEventListener("click", function reset() {
    clearTimeout(timeTimer);

    arrDigits.forEach((digit) => {
      digit.textContent = 0;
      digit.style.color = "black";
    });

    startBtn.disabled = false;
  });
};
