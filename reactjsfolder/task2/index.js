let number = prompt('Введите число');
if (isNaN(number) === true) {
    alert('Вы ввели не число');
} else if (number.length == 1) {
    alert(number);
} else {
    let numberArray = [];
    for (let i = 0; i < number.length; i++) {
        numberArray.push(number[i]);
    }

    let newArray = [];

    numberArray.forEach(function(value, index){
        newArray.push(value);
        if (value % 2 == 0 && numberArray[index+1] % 2 == 0) {
            newArray.push('-');
        } 
    });
    alert(newArray.join(''));
}
