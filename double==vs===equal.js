// ===/Triple equal is so powerful more than double equal
// double equal only check value.
// Triple equal check both data type and value.

//Double equal example

const first = 1;
const second = 1;
if(first == second){
    console.log("Condition number one is true");
}else{
    console.log("Condition number one is false");
};


const first2 = 1;
const second2 = "1";
if(first2 == second2){
    console.log("Condition number two is true");
}else{
    console.log("Condition number two is false");
};


const first3 = 1;
const second3 =true;
if(first3 == second3){
    console.log("Condition number three is true");
}else{
    console.log("Condition number three is false");
};

const dash = "_______________________________";
console.log(dash);


// Example of ===/triple equal

const first4 = 1;
const second4 = "1";
if(first4 === second4){
    console.log("Condition number four is true");
}else{
    console.log("Condition number four is false");
};


const first5 = 1;
const second5 = false;
if(first5 === second5){
    console.log("Condition number five is true");
}else{
    console.log("Condition number five is false");
};

const first6 = 0;
const second6 = false;
if(first6 === second6){
    console.log("Condition number six is true");
}else{
    console.log("Condition number six is false");
};