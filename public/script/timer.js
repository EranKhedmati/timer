//Elements
const timer = document.getElementById("timer"),
  increase = document.querySelectorAll(".increse");

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
function checkTimer () {
    if(sec > 59) {
        min += 1;
        sec -= 60;
        if(min >59) {
            min -= 60;
            hour+= 1;
        }
    }
    if(min >59) {
        hour += 1;
        min -=60;
    }
}   

// Increse --------------------------------------------------------
increase.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.id) {
      case "30":
        increment("sec", 30);
        break;
      case "1":
        increment("min", 1);     
        break;
      case "5":
        increment("min", 5);
        break;
      case "10":
        increment("min", 10);
        break;
    }
  });
});

// increse function
function increment(type, num) {
  switch (type) {
    case "sec":
      sec += num;
      checkTimer()
      updateTimer();
      break;
    case "min":
      min += num;
      checkTimer()
      updateTimer();
      break;
    case "hour": //its not working for now
      hour += num;
      checkTimer()
      updateTimer();
      break;
  }
}