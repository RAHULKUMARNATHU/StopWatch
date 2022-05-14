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
  });

  var optsec = 00;
  var opttens = OutputTens.innerText;
  buttonFlag.addEventListener("click", () => {
    const flag = document.createElement("div");
    
    flag.innerHTML = `<p id="flag"> ${count++}. &ensp; ${OutputSeconds.innerText} : ${
   OutputTens.innerText} &ensp; ${OutputSeconds.innerText-optsec} : ${
    OutputTens.innerText-opttens} ${flagvalue.innerText}</p> `;
    opttens = OutputTens.innerText;
    optsec = OutputSeconds.innerText;
    flagtext.append(flag);
  });


  const flagvalue = ()=>{
    if(opttens > OutputTens.innerText){
        optsec-1;
        opttens +100;
        return opttens - OutputTens.innerText

    }
    return opttens - OutputTens.innerText
  }

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
