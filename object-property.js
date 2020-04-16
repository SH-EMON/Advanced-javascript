const output = [];
const student =[
    {name:"Manna", class:"10", roll:"12"},
    {name:"Omor sunny", class:"10", roll:"32"},
    {name:"Bapparaj", class:"10", roll:"62"},
    {name:"Riaz", class:"10", roll:"10"}
];
// for(let i = 0; i < student.length; i++){
//     const element = student[i];
//     const allName = element.name;
//     output.push(allName);
// }

// console.log(output);
// const newWay = student.map(function(element){
//     const nam = element.name;
//     return nam;
// });
// console.log(newWay);

const name = student.map(s => s.name);
console.log(name);

const roll = student.filter(s =>  s.roll > 12);
console.log(roll);

const roll2 = student.find(s => s.roll < 32);
console.log(roll2);