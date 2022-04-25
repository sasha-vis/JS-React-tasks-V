let newArray;

function changeArrays(...arrays) {

    let firstElem = arrays[0];

    let firstPart = firstElem.slice(0, Math.ceil(firstElem.length / 2));
    let lastPart = firstElem.slice(Math.ceil(firstElem.length / 2), firstElem.length);

    arrays.forEach(function(value) {
        if (value === arrays[0]) return;
        value.forEach(function(value){
            firstPart.push(value);
        });
    });
    newArray = firstPart.concat(lastPart);
};

changeArrays([1, 2, 3, 4, 5], [15, 18, 20], [21, 7, 9]);

console.log(newArray);