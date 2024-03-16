//Elements
const timer = document.getElementById("timer"),
  increase = document.querySelectorAll(".increse"),
  decrease = document.querySelectorAll(".decrease");

// Base Timer variable
let sec = 0,
  min = 0,
  hour = 0;

// Global functions --------------------------------------------
// Update Timer
function updateTimer() {
  timer.innerHTML = `${handleUi(hour)}:${handleUi(min)}:${handleUi(sec)}`;
}
updateTimer(); // Set for the first time!!!!

// when variable lower that 10
function handleUi(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

// check timer
function checkTimer() {
  // increase
  if (sec > 59) {
    min += 1;
    sec -= 60;
    if (min > 59) {
      min -= 60;
      hour += 1;
    }
  }
  if (min > 59) {
    hour += 1;
    min -= 60;
  }

  // decrease
  if (sec < 0) {
    min -= 1;
    sec = 60 + sec;
    if (min < 0 && hour == 0) {
      hour = 0;
      min = 0;
      sec = 0;
    } else if (min < 0 && hour > 0) {
      min = 60 + min;
      hour -= 1;
    }
  }
  if (min < 0 && hour == 0) {
    hour = 0;
    min = 0;
    sec = 0;
  } else if (min < 0 && hour > 0) {
    min = 60 + min;
    hour -= 1;
  }
}

// change timer function
function changeTimer(type, sign, num) {
  switch (type) {
    case "sec":
      sign == "plus" ? (sec += num) : (sec -= num);
      checkTimer();
      updateTimer();
      break;
    case "min":
      sign == "plus" ? (min += num) : (min -= num);
      checkTimer();
      updateTimer();
      break;
    case "hour": //its not working for now
      sign == "plus" ? (hour += num) : (hour -= num);
      checkTimer();
      updateTimer();
      break;
  }
}

// Increse --------------------------------------------------------
increase.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "30":
        changeTimer("sec", "plus", 30);
        break;
      case "1":
        changeTimer("min", "plus", 1);
        break;
      case "5":
        changeTimer("min", "plus", 5);
        break;
      case "10":
        changeTimer("min", "plus", 10);
        break;
    }
  });
});

// Decrease ------------------------------------------------------
decrease.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "-30":
        changeTimer("sec", "minus", 30);
        break;
      case "-1":
        changeTimer("min", "minus", 1);
        break;
      case "-5":
        changeTimer("min", "minus", 5);
        break;
      case "-10":
        changeTimer("min", "minus", 10);
        break;
    }
  });
});
