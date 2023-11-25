//There are 12 way to copy an array

const original = [1, 2, 3];
//1. Spread Operator:
//===================
const copy = [...original];
console.log(copy);

//2. For loop:
//=============
const copy1 = [];
for(let i = 0; i<original.length; i++){
    copy1.push(original[i]);
}
console.log(copy1);


//3. while loop
//==================
const copy2 = [];
let i = 0;
while(i<original.length) {
    copy2.push(original[i]);
    i++;
}
console.log(copy2);


//4. slice()
//====================
const copy3 = original.slice();
console.log(copy3);


//5. Array.from()
//===================
const copy4 = Array.from(original);
console.log(copy4);