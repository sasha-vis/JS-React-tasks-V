let linksArray = document.querySelectorAll('.links-block .links li a');
linksArray.forEach(function(link) {
    let count = 0;
    link.addEventListener('mouseover', function(event) {
        if (count == 0) {
            link.innerHTML = `${link.title} (${link.href})`;
            count++;
        } else {
            event.preventDefault();
        }
    });
});

let inputsArray = document.querySelectorAll('.inputs-block .inputs li input');
inputsArray.forEach(function(input) {
    let count = 0;
    input.addEventListener('click', function(event) {
        if (count == 0) {
            console.log(input.placeholder);
            count++;
        } else {
            event.preventDefault();
        }
    });
});

let dateArray = document.querySelectorAll('.date-block .blocks div');
const monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];
dateArray.forEach(function(elem) {
    let count = 0;
    elem.addEventListener('click', function(event) {
        if (count == 0) {
            switch (elem.className) {
                case 'full-date':
                    elem.firstChild.innerHTML = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
                    break;
                case 'current-month':
                    elem.firstChild.innerHTML = `${monthNames[new Date().getMonth()]}<br>(${new Date().getMonth() + 1})`;
                    break;
                case 'current-year':
                    elem.firstChild.innerHTML = `${new Date().getFullYear()}`;
                    break;
            }
            count++;
        } else {
            event.preventDefault();
        }
    });
});

let inputsArray2 = document.querySelectorAll('.inputs-block-check .inputs li input');
inputsArray2.forEach(function(input) {
    
    input.addEventListener('click', function() {
        document.documentElement.addEventListener('click', function(event) {
            if (event.target != input) {
                if (input.dataset.length == input.value.length) {
                    if (input.classList.contains('input-invalid')) input.classList.remove('input-invalid');
                    input.classList.add('input-valid');
                } else {
                    if (input.classList.contains('input-valid')) input.classList.remove('input-valid');
                    input.classList.add('input-invalid');
                }
            }
        });
    });
});