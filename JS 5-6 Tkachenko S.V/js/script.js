var form = document.querySelector('form');
var timeDisplay = document.querySelector('#display-time');
var startButton = document.querySelector('[name="start-count"]');
var splitButton = document.querySelector('[name="split-count"]');
var resetButton = document.querySelector('[name="reset-count"]');
var hours = 0;
var minutes = 0;
var seconds = 0;
var milisec = 0;
var stopNum = 0;
var timerGo;
var hrs;
var min;
var sec;
var mil;

function startCount() {
  milisec+=8;
  
  if (milisec >= 1000) {
    milisec -= 1000;
    seconds++;
  }

  if (milisec < 10) {
    mil = '00' + milisec;
  } else if (milisec >= 10 && milisec < 100) {
    mil = '0' + milisec;
  } else {
    mil = milisec;
  }
  sec = (seconds < 10) ? '0' + seconds : seconds;
  
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  
  min = (minutes < 10) ? '0' + minutes : minutes;
  
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  hrs = (hours < 10) ? '0' + hours : hours;
  timeDisplay.innerHTML = hrs + ':' + min + ':' + sec + '.' + mil;
}

function startTimer() {
  if ( startButton.classList.contains('stop') ) {
    clearInterval(timerGo);
    startButton.classList.remove('stop');
    startButton.value = 'start';
    var stopTimer = document.createElement('p');
    stopTimer.classList.add('stop-timer');
    stopTimer.innerHTML = ++stopNum + ' Stop: ' + hrs + ':' + min + ':' + sec + '.' + mil;
    form.appendChild(stopTimer);
  } else {
    timerGo = setInterval(startCount, 8);
    startButton.classList.add('stop');
    startButton.value = 'stop';
  }
}

function splitTimer() {
  if ( startButton.classList.contains('stop') ) {
    var splitTimer = document.createElement('p');
    splitTimer.classList.add('split-timer');
    splitTimer.innerHTML = ++stopNum + ' Split: ' + hrs + ':' + min + ':' + sec + '.' + mil;
    form.appendChild(splitTimer);
  }
}

function resetTimer() {
  clearInterval(timerGo);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milisec = 0;
  stopNum = 0;
  timeDisplay.innerHTML = '00:00:00.000';

  if ( startButton.classList.contains('stop') ) {
    startButton.classList.remove('stop');
    startButton.value = 'start';
  }

  var checkPoint = document.querySelector('form p:last-child');

  while (checkPoint) {
    checkPoint.parentNode.removeChild(checkPoint);
    checkPoint = document.querySelector('form p:last-child');
  }
}

startButton.addEventListener('click', startTimer);
splitButton.addEventListener('click', splitTimer);
resetButton.addEventListener('click', resetTimer);
