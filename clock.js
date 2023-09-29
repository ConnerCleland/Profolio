
const clockContainer = document.querySelector('.clock');
const timeElement = document.getElementById('time');

function updateTime() {
    var now = new Date();
    timeElement.innerText = zeroPadding(now.getHours(), 2) + ":" + zeroPadding(now.getMinutes(), 2) + ":" + zeroPadding(now.getSeconds(), 2);
}

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
    return String(num).padStart(digit, '0');
}