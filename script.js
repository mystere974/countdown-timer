const dedays = document.getElementById("days")
const deHours = document.getElementById("hours")
const deMins = document.getElementById("mins")
const deSeconds = document.getElementById("seconds")

const newYears = "1 Jan 2022";

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60)
    /*console.log(days, hours, mins, seconds);*/

    dedays.innerHTML = days;
    deHours.innerHTML = hours;
    deMins.innerHTML = mins;
    deSeconds.innerHTML = seconds;


}
countdown()

setInterval(countdown, 1000)

