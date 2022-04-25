function counter() {
    let count = 1;
    return () => count++
};

let allBtns = document.querySelectorAll('.btns button');

allBtns.forEach(function(value, index) {

    let btnClick = counter();
    
    value.addEventListener("click", function() {
        console.log(btnClick());
    });
});
