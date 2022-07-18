const second = 1000;

var ping = new Audio("sounds/chime1.mp3");
var pingInterval;
var timeUnit;
var timerInterval;
var timerCount = 0;

var secondsLeft = 0;
var minutesLeft = 0;
var hoursLeft = 0;

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
    clearInterval(timerInterval);
    document.getElementById("iteration-countdown").innerHTML = 'N/A';
}

function timerInit() {
    pingInterval = document.getElementById("ping-interval").value;
    timeUnit = document.getElementById("time-unit").value;
    if (timeUnit === "seconds"){
        pingInterval *= 1000;
    }
    else if (timeUnit === "minutes"){
        pingInterval *= 1000*60;
    }
    else if (timeUnit === "hours"){
        pingInterval *= 1000*60*24;
    }
    // console.log(pingInterval);
}

function timerIteration() {
    timerCount++;
    countdownToNext();
    console.log(timerCount * 1000, pingInterval);
    if (timerCount * 1000 - pingInterval === 0){
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
    
    const countdownTimer = `${hoursLeft}: ${minutesLeft}: ${secondsLeft}`
    // console.log(hoursLeft);
    // console.log(minutesLeft);
    // console.log(secondsLeft);

    document.getElementById("iteration-countdown").innerHTML = countdownTimer;
}

/* separating countdown timer into hours, minutes and seconds */
function formatCountdownTime(){
    hoursLeft = Math.floor(timerCount / (60 * 24));
    minutesLeft = Math.floor(timerCount / 60);
    secondsLeft = timerCount % 60;

    if (hoursLeft < 10){
        hoursLeft = '0' + hoursLeft;
    }
    if (minutesLeft < 10){
        minutesLeft = '0' + minutesLeft;
    }
    if (secondsLeft < 10){
        secondsLeft = '0' + secondsLeft;
    }

}
