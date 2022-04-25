function func(ms) {
    return new Promise((resolve, reject) => {
        if (ms || ms == 0) {
            setTimeout(function() {
                let s = ms / 1000;
                resolve(s);
            }, ms);
        } else {
            reject('Время не было указано');
        }
    });
};

func()
    .then(s => {
        console.log(`Выполнилось через ${s} секунды`);
    })
    .catch(error => console.log(error));


