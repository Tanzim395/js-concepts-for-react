//1.map
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

const brands = products.map(product => product.brand);
// console.log(brands);

const brands2 = products.map(product => product.name);
// console.log(brands2);

//2.forEach
//using forEach as no return needed.
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.price));
// products.forEach(product => console.log(product.color));

//for multiline: 
products.forEach(product => {

})

//3.filter
const cheap = products.filter(product => product.price <= 10000)
// console.log(cheap);

//products which contains the word specific word n: 
const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// find
const special = products.find(p => p.name.includes('n'));
// console.log(special);