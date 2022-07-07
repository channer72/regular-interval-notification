var ping = new Audio("sounds/chime1.mp3");
var pingInterval;
var timeUnit;

document.getElementById("start-button").addEventListener("click", timer)

function timer() {
    timerInit();
    setInterval(playSound, pingInterval);

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

function playSound() {
    ping.load();
    ping.play();
}

