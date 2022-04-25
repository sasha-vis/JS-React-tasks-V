class HashStorage {
    constructor() {
      this.storage = {};
    }

    addValue(key, value) {this.storage[key] = value}

    getValue(key) {return this.storage[key]}

    deleteValue(key) {
        if (!this.storage[key]) return false;
        return delete this.storage[key]
    }

    getKeys() {return Object.keys(this.storage)}
}

let storage = new HashStorage();

storage.addValue('name', 'Aleksandr');

storage.addValue('surname', 'Vysotski');

storage.addValue('age', 23);
storage.addValue('hobbies', ['watch movies', 'learn js/c#', 'do sport', 'read books', 'get together with friends']);

console.log(storage.getValue('surname'));
console.log(storage.getValue('children'));

console.log(storage.getValue('hobbies'));

console.log(storage.deleteValue('hobbies'));
console.log(storage.deleteValue('children'));

console.log(storage.getKeys());

console.log(storage)