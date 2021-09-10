//1. How to declare a variable using let and const:
const fatherName = 'Azizul';
let season = 'summer';
season = 'rainy';
// console.log(season);

//2.Condition:
//6 basic conditions: >,<,===,!==,<=,>=
//multiple condition: &&(Logical and) , ||(Logical or)
if (fatherName === 'Azizul' && season === 'rainy') {
    // console.log('Logical or matched')
}
else if (fatherName === 'Azizul') {
    // console.log('strictly data type matched')
}
else {
    // console.log('not matched')
}

//3.Array declare 
//index,
//index.push
const numbers = [89, 35, 98, 12];
numbers[0] = 56; //it set the first index of the arr numbers to 56.
// console.log(numbers);

//4.for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // console.log(number);
}

//5.function
//function for multiplication:
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const output = multiply(12, 15);
// console.log(output);

//6. object
// 3 ways to access propert name
const student = {
    name: 'Galib Khan',
    age: 35,
    movies: ['Money Heist', 'La Casa De Papel'],
    gotAward: true,
}

const myVariable = 'age';

console.log(student.age); //1.direct access via property
console.log(student['age']); //2.access via property name string
console.log(student[myVariable]); //3.access via property name in a variable
