/*
*   Tyler Sharara
*   Node.js Homework
*   Cis-225
*   7-9-2020
*
*/

const prompt = require('prompt-sync')();
const moment = require('moment');
const fs = require('fs');

function numberGame() {
    let num = Math.floor(Math.random() * 101);
    time = moment().format('MMMM Do YYYY, h:mm:ss a');
    let flag = false;
    let guess = 0;

    do {
        const num2 = prompt('Guess a number between 1-100:');
        if (num == num2) {
            guess++;
            flag = true;
            fs.appendFile('gamer.txt', `You beat the guessing game in ${guess} guesses on ${time + '\n'}`, function (err) {
                if (err) throw err;
            });
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

let flag = false;

do {
    numberGame();
    const play = prompt('Wanna play again? (Y/N)');
    if(play == 'N' || play == 'n'){
        flag = true;
    }
} while (flag == false);


