var ping = new Audio("sounds/chime1.mp3");
var pingInterval;
var timeUnit;

document.getElementById("start-button").addEventListener("click", startTimer)

function startTimer() {
    pingInterval = document.getElementById("ping-interval").value;
    timeUnit = document.getElementById("time-unit").value;
    if (timeUnit === "minutes"){
        pingInterval *= 60;
    }
    else if (timeUnit === "hours"){
        pingInterval *= 60*60;
    }

    ping.play();
}

function playSound() {
    ping.play();
}

