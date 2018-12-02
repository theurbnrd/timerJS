class Timer {
    constructor() {
        console.log('Countdown Timer')
    }
}

var myTimer;
   function startTime() {
     myTimer = setInterval(myClock, 1000);
     var s = 60;

     function myClock() {
       document.getElementById("timerClock").innerHTML = --s;
       if (s == 0) {
         clearInterval(myTimer);
         alert("Your time is up, close laptop");
       }
     }
   }
