function clock () {

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();
let far = 'AM';

if(hours === 0) {
    hours = 11
}
if(hours > 11) {
    hours = hours - 12;
    far = 'PM'
}

let ss = `${hours}:${minutes}:${second}`;



document.getElementById('write').innerText = ss;
document.getElementById('am').innerText = far;



setInterval(clock, 1000);
}
clock();