let numbers= [1,3,4,5,7,8,10,12,17,20,32];
console.log(numbers);

console.log(numbers[0],numbers [5],numbers [10]);

console.log(numbers.length);

let lastNumber= numbers.pop();
console.log(lastNumber);
console.log(numbers);

numbers.push(13 , 16);
console.log(numbers);

let filteredNumbers = numbers.filter(nums => nums >= 6);
console.log(filteredNumbers);
console.log(numbers);

let foundNumbers= numbers.find(num=> num <=6 );
console.log (foundNumbers);
console.log(numbers);

let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
console.log(numbers);

numbers.forEach ((number, index) => console.log(`index ${index} is ${number}`));

console.log(numbers);

let[first , second, third, fourth, fifth ] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);




