//1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]
const [x, y] = numbers;


function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34]
const [first, second] = boxify(90, 34);


// console.log(boxify(56, 23));

const student = {
    name: 'Galib Khan',
    age: 35,
    movies: ['Money Heist', 'La Casa De Papel'],
    gotAward: true,
}
const [firstMovie, secondMovie] = student.movies;

//object destructuring

const { name, age, salary } = { name: 'alu', age: 14, salary: 50000 };

const employee = {
    name: 'Khedir',
    ide: 'VS code',
    designation: 'react native developer',
    os: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 1000,
            brand: 'garmin',
        }
    }
}

const { machine, os } = employee; //from the object
const { weight, address } = employee.specification;//from obeject of obeject
const { brand, price } = employee.specification.watch;//from nested object

console.log({ brand, price });