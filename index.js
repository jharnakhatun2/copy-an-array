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

//6. concat()
//===============
const copy5 = original.concat();
const copy6 = original.concat([]);
const copy7 = [].concat(original);
console.log(copy5);
console.log(copy6);
console.log(copy7);


//7. map()
//========
const copy8 = original.map((x)=> x);
console.log(copy8);

//8. Array.of()
//=================
const copy9 = Array.of(...original);
console.log(copy9);


//9. JSON.parse & JSON.stringify
//===============================
const copy10 = JSON.parse(JSON.stringify(original));
console.log(copy10);

//10. Object.assign()
//=====================
const copy11 = Object.assign([], original);
console.log(copy11);

//11. filter()
//===============
const copy12 = original.filter(()=>true);
console.log(copy12);

//12. reduce()
//================
const copy13 = original.reduce((newArray, element)=>{
    newArray.push(element);
    return newArray;
},[]);

console.log(copy13);