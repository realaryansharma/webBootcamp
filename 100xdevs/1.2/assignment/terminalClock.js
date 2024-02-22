var seconds=0;
var minutes=0;

function terminalClock() {
    console.log(minutes + " : " + seconds); 
    seconds++;
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60
}

setInterval(terminalClock, 1*1000);