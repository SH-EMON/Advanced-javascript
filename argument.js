function add(num1,num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2] + arguments[3];
}
const total = add(5,7,3,10);
console.log(total);