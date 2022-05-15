window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var flagtext = document.getElementById("flag-text");
  var OutputSeconds = document.getElementById("second");
  var OutputTens = document.getElementById("tens");
  var buttonStart = document.getElementById("btn-start");
  var buttonStop = document.getElementById("btn-stop");
  var buttonReset = document.getElementById("btn-reset");
  var buttonFlag = document.getElementById("btn-flag");
  var count = 1;
  var Interval;

  // eventListener for start button 
  buttonStart.addEventListener("click", () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10); // millisecond 10 = 0.01 second
  });

  buttonStop.addEventListener("click", () => {
    clearInterval(Interval);
  });

  buttonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = tens;
    currOpttens="00";
    currOptSec="00";
    opttens = "00";
    optsec = "00";

  });

  var optsec = OutputSeconds.innerText;
  var opttens = OutputTens.innerText;

  buttonFlag.addEventListener("click", () => {
    const flag = document.createElement("div");
    const [secvalue, tensvalue] = flagvalue();
    flag.innerHTML = `<p id="flag"> ${count++}. &ensp; ${
      OutputSeconds.innerText
    } : ${OutputTens.innerText} &ensp; ${secvalue} : ${tensvalue} </p> `;
    opttens = OutputTens.innerText;
    optsec = OutputSeconds.innerText;
    flagtext.append(flag);

  });

  const flagvalue = () => {
    let currOpttens = OutputTens.innerText;
    let currOptSec = OutputSeconds.innerText;
    let resulttens, resultsec;
    if (opttens > OutputTens.innerText) {
      currOptSec = currOptSec - 1;
      currOpttens = Number(currOpttens) + 100;
      resulttens = currOpttens - opttens;
      resultsec = currOptSec - optsec;

      return [resultsec, resulttens];
    }
    resulttens = currOpttens - opttens;
    resultsec = currOptSec - optsec;
    return [resultsec, resulttens];
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      OutputTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      OutputTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      OutputSeconds.innerHTML = "0" + seconds;
      tens = 0;
      OutputTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      OutputSeconds.innerHTML = seconds;
    }
  }
};
