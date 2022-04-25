let fizzBuzz = function() {
    for (let i = 1; i <= 100; i++) {
        let currentNumber = i;
        if (Number.isInteger(currentNumber / 3) === true && Number.isInteger(currentNumber / 5) === true) {
            console.log('FizzBuzz');
        } else if (Number.isInteger(currentNumber / 3) === true) {
            console.log('Fizz');
        } else if (Number.isInteger(currentNumber / 5) === true) {
            console.log('Buzz');
        } else {
            console.log(currentNumber);
        }
    }
}();