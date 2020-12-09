// Code your solutions in this file
function writeCards(arr, eventName) {
    let thanksArray = []
    for(let i = 0; i < arr.length; i++) {
        thanksArray.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    
    };
    return thanksArray;
};

function countDown(int) {
    while (int > 0) {
    console.log(int);
    int -= 1;
    };
    console.log(int)
};