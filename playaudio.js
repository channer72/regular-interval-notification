const second = 1000;

var ping = new Audio("sounds/chime1.mp3");
var pingInterval; // time between pings in sec
var timeUnit; // unit of time the timer is in ('seconds', 'minutes' or 'hours')
var timerInterval; // interval iteration object
var timerCount = 0; // time elapsed since last ping in sec

var secondsDisplay = 0;
var minutesDisplay = 0;
var hoursDisplay = 0;

document.getElementById("start-button").addEventListener("click", timer);
document.getElementById("reset-button").addEventListener("click", resetTimer);

function timer() {
    console.log("start!");
    timerInit();
    timerInterval = setInterval(timerIteration, second);
    document.getElementById("start-button").disabled = true;
}

function resetTimer(){
    console.log("stopped!");
    document.getElementById("start-button").disabled = false;
    timerCount = 0
    clearInterval(timerInterval);
    document.getElementById("iteration-countdown").innerHTML = 'N/A';
}

function timerInit() {
    pingInterval = document.getElementById("ping-interval").value;
    timeUnit = document.getElementById("time-unit").value;
    if (timeUnit === "minutes"){
        pingInterval *= 60;
    }
    else if (timeUnit === "hours"){
        pingInterval *= 60*24;
    }
    // console.log(pingInterval);
}

function timerIteration() {
    timerCount++;
    countdownToNext();
    console.log("timerCount :", timerCount, "||| pingInterval: ", pingInterval);
    if (timerCount - pingInterval === 0){
        console.log("reset");
        playSound();
        timerCount = 0;
    }
}


function playSound() {
    ping.load();
    ping.play();
}

function countdownToNext(){
    formatCountdownTime();
    
    const countdownTimer = `${hoursDisplay}: ${minutesDisplay}: ${secondsDisplay}`
    // console.log(hoursLeft);
    // console.log(minutesLeft);
    // console.log(secondsLeft);

    document.getElementById("iteration-countdown").innerHTML = countdownTimer;
}

/* separating countdown timer into hours, minutes and seconds */
function formatCountdownTime(){
    
    timeLeft = pingInterval - timerCount
    console.log("timeLeft:", timeLeft)
    secondsDisplay = timeLeft % 60;
    minutesDisplay = Math.floor(timeLeft / 60);
    hoursDisplay = Math.floor(timeLeft / (60 * 24));

    if (hoursDisplay < 10){
        hoursDisplay = '0' + hoursDisplay;
    }
    if (minutesDisplay < 10){
        minutesDisplay = '0' + minutesDisplay;
    }
    if (secondsDisplay < 10){
        secondsDisplay = '0' + secondsDisplay;
    }

}
