console.log(2>1); // if 2 is greater than 1 then true
console.log(2>=1); // if 2 is greater than or equal to 1 then true
console.log(2<1); // if 2 is less than 1 then true
console.log(2==1); // if 2 is equal to 1 then true
console.log(2!=1); // if 2 is not equal to 1 then true

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // javascript treats null as 0 in comparison operations

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0); // javascript treats undefined as NAN in comparison operations


// '===' checks for both data value and data type of the operands
console.log("2" === 2); //false