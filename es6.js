//Template String:

const numbers = [89, 35, 98, 12];
const student = {
    name: 'Galib Khan',
    age: 35,
    movies: ['Money Heist', 'La Casa De Papel'],
    gotAward: true,
}

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked the movie ${student.movies[0]}`;
// console.log(about);

//2.Arrow function 
const getFiftyFive = () => 55; //array function using no parameter
const addSixtyFive = num => num + 65; //one parameter
const isEven = x => x % 2 == 0; //even numbers will divided by 2.
const addThree = (x, y, z) => x + y + z; //multiparameter arrowfunction.

//spread operator
const newNumbers = [...numbers];

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]; //wiil add 55 as a new element of the numbers array.

numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);