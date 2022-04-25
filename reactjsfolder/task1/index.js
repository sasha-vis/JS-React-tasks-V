function quadraticEquation(a, b, c) {
    if(a == 0) return;
    if (b < 0) b = -b;
    if (c < 0) c = -c;

    let d = b * b - 4 * a * c;
    
    if (d < 0) {
        console.log(`Уравнение ${a == 1 ? a = '' : a}x^2 - ${b}x + ${c} = 0 не имеет вещественных корней`);
    } else if (d == 0) {
        console.log(`Уравнение ${a == 1 ? a = '' : a}x^2 + ${b}x + ${c} = 0 имеет один вещественный корень х=${(-b + Math.sqrt(d)) / (2 * (a == '' ? a = 1 : a))}`);
    } else {
        console.log(`Уравнение ${a == 1 ? a = '' : a}х^2 – ${b}x + ${c} = 0 имеет корни х1 = ${(b + Math.sqrt(d)) / (2 * a)} и x2 = ${(b - Math.sqrt(d)) / (2 * a)}`);
    }
};

quadraticEquation(4, -8, 1);