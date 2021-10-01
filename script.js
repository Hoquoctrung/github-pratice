const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const timeAim = "29 Jan 2022";

function countDown() {
    const newYearDate = new Date(timeAim);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = (Math.floor(totalSeconds / 3600) % 24) % 60 + 37;
    const secs = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days) ;
    hoursEl.innerHTML = formatTime(hours) ;
    minsEl.innerHTML = formatTime(mins) ;
    secsEl.innerHTML = formatTime (secs) ;
}

function formatTime(time) {
        return time < 10 ? (`0${time}`) : time;
}

countDown();
setInterval(countDown,1000);



