const operators = ['+', '-', '*', '/'];
const allowedStrings = ['q','c','ac','v','stack','help'];
const invalidOutputs = [null, undefined];
let v = false;
let stack = [];

function processInput(inputString) {
    const inputParts = inputString.split(" ").filter(part => part !== '');
    console.log(inputParts);
    let output;
    for (let part of inputParts) {
        if (!validInputPart(part)) {
            // throw error
            sendOutput('invalid input');
            return 'invalid input';

        } else if (allowedStrings.includes(part)) {
            performCommand(part);

        } else if (operators.includes(part)) {
            // pop last 2 items off the stack, perform operation and push result onto the stack
            performOperation(part, stack);

        } else {
            pushOnToStack(part);
        }
    }

    output = stack[stack.length - 1];
    validOutput(output) ? sendOutput(output) : stack.pop();

    return output;
}

function pushOnToStack(part) {
    stack.push(parseFloat(part));
}

function performOperation(operator, stack) {
    let result = 0;
    let x = stack.pop();
    let y = stack.pop();
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = y - x;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = y / x;
            break;
    }
    if(v) printOperation(x, y, operator);
    stack.push(result);
}

function performCommand(part) {
    switch (part) {
        case 'c':
            stack.pop();
            break;
        case 'ac':
            stack.length = 0;
            break;
        case 'v':
            v = !v;
            sendOutput('verbose mode: ' + v);
            break;
        case 'help':
            printApplicationHelp();
            break;
        case 'stack':
            sendOutput('[' + stack.join() + ']');
            break;
    }
    return true;
}

function validInputPart(part) {
    if (operators.includes(part) || allowedStrings.includes(part)) {
        return true;
    }
    return typeof parseFloat(part) === 'number'
        && !isNaN(parseFloat(part));
}

function validOutput(output) {
    return !invalidOutputs.includes(output);
}

function printApplicationHelp() {
    sendOutput("Available commands:\n" +
        "'c' - remove item from top of stack\n" +
        "'ac' - remove all items from the stack\n" +
        "'q' - quit application\n" +
        "'v' - toggle verbose mode (show infix operations)\n" +
        "'stack' - show current stack\n" +
        "'help' - show this help message");
}

function printOperation(x, y, operator) {
    switch (operator) {
        case '+':
        case '*':
            sendOutput(x + ' ' + operator + ' ' + y);
            break;
        case '-':
        case '/':
            sendOutput(y + ' ' + operator + ' ' + x);
            break;
    }
}

function sendOutput(output) {
    process.stdout.write(output + "\n");
}

module.exports = { processInput, sendOutput }