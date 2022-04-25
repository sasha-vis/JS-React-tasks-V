let value = prompt("Введите значение");

let compress = function(value) {
    let result = '';
    if (value.length == 0) {
        alert('Вы ничего не ввели');
    } else if (value.length == 1) {
        alert(value);
    } else {
        for (let i = 0; i < value.length; i++) {
            let currentLetter = value[i];
            let count = 1;
            while (value[i + 1] === currentLetter) {
                count++;
                i++;
            }
            result += currentLetter + count;
        }
        alert(result);
    }
};

let uncompress = function(value) {
    let result = '';
    if (value.length == 0) {
        alert('Вы ничего не ввели');
    } else if (value.length == 1) {
        alert(value);
    } else {
        for (let i = 0; i < value.length; i++) {
            let currentLetter = value[i];
            let number = Number(value[i + 1]);
            
            if (number > 0) {
                for (let j = 0; j < number; j++) {
                    result += currentLetter;
                }
            }
        }
        alert(result);
    }
};

let checkValue = function(value) {
    var r = /\d+/;
    var s = value;
    if (s.match(r) === null) {
        compress(value);
    } else {
        uncompress(value);
    }
}(value);


