let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;
let showCurrentTime = function () {
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
    
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.textContent = clockTime;
};
// showCurrentTime();
// setInterval(showCurrentTime,300)
let updateClock = function () {
    let time = new Date().getHours();
    let messageText;
    let image = "../images/main.jpg";
    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJS = document.getElementById('catLol-img');

    if (time == partytime) {
        image = "../images/party.jpg";
        messageText = "Let's party!";
    }
    else if (time == wakeuptime) {
        image = "../images/wakeup.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "../images/lunch.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "../images/sleep.jpg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "../images/wakeup.jpg";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "../images/sleep.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "../images/main.jpg";
        messageText = "Good afternoon!";
    }

    // console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImageJS.src = image;

    showCurrentTime();
};
updateClock();

setInterval(updateClock, 300);

let partyTimeButton = document.querySelector("#partyTimeButton");
// console.log(partyTimeButton.innerText);
let partyEvent = function () {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#c80874";
        document.body.classList.remove("party");
    }
    else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#2c2c2c";
        document.body.classList.add("party");
    }
};

partyTimeButton.addEventListener("click", partyEvent);
partyEvent();
var wakeUpTimeSelector = document.getElementById("wakeUpEvent-select");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


var lunchTimeSelector = document.getElementById("lunchTimeEvent-select");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


var napTimeSelector = document.getElementById("napeTime-select");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);