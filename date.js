
const dateElement = document.getElementById('date');
const Week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function updateDate() {
    var now = new Date();
    dateElement.innerText = now.getFullYear() + "-" + zeroPadding(now.getMonth() + 1, 2) + "-" + zeroPadding(now.getDate(), 2) + " " + Week[now.getDay()];
}

updateDate();
