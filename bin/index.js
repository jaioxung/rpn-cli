#!/usr/bin/env node

const readline = require('readline');
const rpnCalculator = require('../rpn-calculator');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rpnCalculator.sendOutput("RPN Calculator \n" +
    "You may input you operands and operators one at a time or as a single string with each separated by a space.\n" +
    "Enter 'help' for list of commands\n");

awaitInput();

function awaitInput () {
    rl.question('> ', inputString => {
        if (inputString === 'q') {
            return rl.close();
        }
        rpnCalculator.processInput(inputString);
        awaitInput();
    });
}