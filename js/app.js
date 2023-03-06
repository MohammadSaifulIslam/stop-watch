let mili = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timerDisplay = document.getElementById('timer-display');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let timerId = null;
// timer start function
startBtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})

// timer pause function
pauseBtn.addEventListener('click', function() {
    clearInterval(timerId);
})

// timer reset function
resetBtn.addEventListener('click', function() {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00 : 00`;
    mili = min = sec = hour = 0;
})

// timer main function
function startTimer() {
    mili++;
    if (mili === 99) {
        mili = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
            if (min === 60) {
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