function increaseNumber(){
    let addNumber = 0;
    return function(){
        addNumber++;
        return addNumber;
    }
};
const result1 = increaseNumber();
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());

const result2 = increaseNumber();
console.log(result2());
console.log(result2());
console.log(result1());
console.log(result2());