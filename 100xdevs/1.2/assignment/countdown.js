//Create a counter in JavaScript that counts from 30 to 0;

var count = 30;

function countdown() {
    (count == 0) ? clearInterval(storeTimeout) : console.log(count--);
}

const storeTimeout = setInterval(countdown, 1*1000);