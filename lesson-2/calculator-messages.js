// Welcome to the program
exports.welcome = () => {
  console.log("Welcome to calculator!");
};

// First number
exports.num1 = () => {
  console.log("Please enter the first number.");
};
// Second number
exports.num2 = () => {
  console.log("Please enter the second number.");
};
// Invalid num message
exports.invalidNum = () => {
  console.log("Hmmm.... that doesn't look like a valid number");
};
// Operations to perform
exports.operations = () => {
  console.log(`=> What operation would you like to perform on these numbers? You can select:
  
    "1" for Addition, 
    "2" for Subtraction, 
    "3" for Multiplication, or
    "4" for Division.

`);
};
// Invalid operation
exports.invalidOperation = () => {
  console.log("Please select a valid operation.");
};
// Option to begin again
exports.startOver = () => {
  console.log("Would you like to perform another calculation (y/n)?");
};
