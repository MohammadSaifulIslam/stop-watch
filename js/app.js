let mili = 00;
let sec = 00;
let min = 00;
let hour = 00;
let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let timerId = null;

startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})

pauseBtn.addEventListener('click', function() {
    clearInterval(timerId);
})

resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    mili = min = sec = hour = 0;
})

function startTimer() {
    mili++;
    if (mili === 99) {
        mili = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            mili++;
            if (mili === 60) {
                hour++;
            }
        }
    }

    let miliString = mili < 10 ? `0${mili}` : mili;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    timerDisplay.innerHTML = `${hourString} : ${minString} : ${secString} : ${miliString}`

}