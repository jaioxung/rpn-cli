# rpn-cli
A Node.js CLI implementation of a Reverse Polish Notation calculator

I chose to write all functions that perform the duties of the calculator in a separate module file so that any number of interfaces could implement the calculator.
To implement the command line interface I wrote a recursive implementation of the Node.js readline `question` method to receive input from the user, perform the necessary operations and then await the user's next input.

Given more time I would implement tests that mock the stdin so I could test the application more closely to how a user would interact with it. I would also look into refactoring opportunities in the `rpn-calculator.js` module.

### How to run

1. Clone the repo or download
2. In terminal navigate to the project folder and run `npm install`
3. Run tests with `npm test`
4. In terminal run `node .` to start the application
5. In the application input `help` for list of commands


