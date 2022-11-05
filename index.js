// const sayHello = language => {
//     if (language.toUpperCase() === 'INDONESIA') {
//         return 'Selamat Pagi!';
//     } else {
//         return 'Good Morning!';
//     }
// }

// console.log(sayHello('Indonesia'));

// function people(name, age) {
//     this.nama = name;
//     this.umur = age;
// }

// const programmer = new people('John', 18);

// console.log(typeof (programmer.nama));
// console.log(programmer.umur)

// const programmer = {
//     name: 'John',
//     age: 18,
//     hobby: ['Coding', 'Read book', 'Ping-Pong'],
// };

// console.log(programmer.name);
// console.log(programmer.age);
// console.log(programmer.hobby);


// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// // menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//     // this -> People
//     setTimeout(function () {
//         // this -> ??
//         console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
//         console.log(`Hobby saya adalah ${this.hobby}`);
//     }, 300);
// };

// const programmer = new People('John', 18, ['Coding', 'Read book', 'Ping-pong']);
// programmer.introMyself();

/* Output:
Hello! Nama saya undefined, umur saya undefined.
Hobby saya adalah undefined
*/


// function People(name, age, hobby) {
//     this.name = name;
//     this.age = age;
//     this.hobby = hobby;
// }

// // menambahkan introMyself ke People
// People.prototype.introMyself = function () {
//     // this -> People
//     setTimeout(() => {
//         // this -> People
//         console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
//         console.log(`Hobby saya adalah ${this.hobby}`);
//     }, 300);
// };

// const programmer = new People('John', 18, ['Coding', 'Read book', 'Ping-pong']);
// programmer.introMyself();

/* Output:
Hello! Nama saya John, umur saya 18.
Hobby saya adalah Coding,Read book,Ping-pong
*/


// function sayHello(name = 'Stranger', greet = 'Hello') {
//     console.log(`${greet} ${name}!`);
// }

// sayHello('Dimas', 'Hai');
// sayHello();

// const sayHello = (name='Stranger', greet='Hello') => {
//     console.log(`${greet} ${name}!`)
// }

// sayHello('John', 'Hello');
// sayHello();

function doHomework(subject, callback) {
    callback(); // function main mengeksekusi parameter callBack yang mengandung value dari function alertFinished
    console.log(`Starting my ${subject} homework`);
}

function alertFinished() {
    console.log('Finished my homework');
}

// invoke function doHomework dengan membawa value function alertFinished
doHomework('math', alertFinished);