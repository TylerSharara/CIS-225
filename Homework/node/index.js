/*
*   Tyler Sharara
*   Node.js Homework
*   Cis-225
*   7-9-2020
*
*/

const prompt = require('prompt-sync')();

function numberGame() {
    var num = Math.floor(Math.random() * 101);
    var flag = false;
    var guess = 0;

    do {
        const num2 = prompt('Guess a number between 1-100:');
        if (num == num2) {
            guess++;
            flag = true;
            console.log(`Good Job! It took you: ${guess} guesses!`, '\n');
        } else if (num > num2) {
            console.log(`Too low!`, '\n');
            guess++;
        } else if (num < num2) {
            console.log(`Too High!`, '\n');
            guess++;
        }
    } while (flag == false);
}

while (true == true){
    numberGame();
}


