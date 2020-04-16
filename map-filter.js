const numbers = [5,10,15,20,25,30];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
};
console.log(output);

// Example of map 

const num = [2,3,4,5,6];
const square = num.map(function(element){
    return element * element;
});
console.log(square);


// Example of filter
const num2 = [7,8,9,10,12];
const bigger = num2.filter(x => x > 9);
console.log(bigger);

// Example of find
const num3 = [7,8,9,10,12];
const smaller = num3.find(x => x < 9);
console.log(smaller);



