// script.js
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let timer;
let progress = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("stopSound").play();
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(() => {
            seconds++;
            progress += 1.6667; // 1.6667% per second to fill progress bar in 60 seconds
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                progress = 0;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            document.getElementById("time").innerText = 
                (hours < 10 ? "0" + hours : hours) + ":" +
                (minutes < 10 ? "0" + minutes : minutes) + ":" +
                (seconds < 10 ? "0" + seconds : seconds);
            document.getElementById("progress").style.width = `${progress}%`;
        }, 1000);
        document.getElementById("startSound").play();
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("resetSound").play();
    hours = 0;
    minutes = 0;
    seconds = 0;
    progress = 0;
    document.getElementById("time").innerText = "00:00:00";
    document.getElementById("progress").style.width = "0%";
    document.getElementById("startStop").innerText = "Start";
    isRunning = false;
}
