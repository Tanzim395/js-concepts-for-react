//1. JSON

const student = {
    name: 'Galib Khan',
    age: 35,
    movies: ['Money Heist', 'La Casa De Papel'],
    gotAward: true,
}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//2.fetch:
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [23, 54, 63, 86, 24, 68, 69];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

//for of on array like object
//loop on an object using for in


//add or remove from an array
const products = [
    {
        name: 'Laptop',
        price: 32000,
        brand: 'Toshiba',
        color: 'white'
    },
    { name: 'Laptop', price: 32000, brand: 'Toshiba', color: 'white' },
    { name: 'phone', price: 10000, brand: 'Walton', color: 'black' },
    { name: 'sunglass', price: 2000, brand: 'Reyban', color: 'black' },
    { name: 'Camera', price: 30000, brand: 'Canon', color: 'Black' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'pattiwala', color: 'black' }

//copy products array and add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(p => p.name != 'phone');