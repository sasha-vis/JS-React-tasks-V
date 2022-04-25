let list = document.querySelector('.list');
let input = document.querySelector('input');
let addBtn = document.querySelector('.add-btn');
let dltBtn = document.querySelector('.dlt-btn');

let getElements = function(array) {
    if(array == undefined) return;
    array.forEach(function(elem){
        let li = document.createElement('li');
        li.innerHTML = `${elem}`;
        list.append(li);
    });
    dltBtn.removeAttribute('disabled');
};

getElements();

// ['Sasha', 'Vysotski', 'Vladimirovich']  Можно также добавить этот массив в getElements;

const save = function(event) {
    if (event.code != 'Enter') {
        return;
    }
    const inputValue = event.target.value;
    let li = event.target.closest('li');
    li.innerHTML = `${inputValue}`;
    input.blur();
};

let editInput = function(event) {
    let li = event.target.closest('li');
    li.innerHTML = '';

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = '';
    input.style.outline = 'none';
    input.style.border = 'none';

    li.appendChild(input);

    input.focus();
    input.addEventListener('keyup', save);
};

list.addEventListener('click', function(event){
    editInput(event);
});

addBtn.addEventListener('click', function(){
    if(input.value != '') {
        let li = document.createElement('li');
        li.innerHTML = `${input.value}`;
        list.append(li);
        input.value = '';
        dltBtn.removeAttribute('disabled');
    } else {
        alert('Вы ничего не ввели');
    }
});

dltBtn.addEventListener('click', function(){
    list.lastElementChild.remove();
    if (list.innerHTML == '') dltBtn.setAttribute('disabled', true);
});