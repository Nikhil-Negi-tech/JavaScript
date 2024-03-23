//Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("03-23-2024")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamps = Date.now()
console.log(myTimeStamps);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: "Asia/Kolkata",
})