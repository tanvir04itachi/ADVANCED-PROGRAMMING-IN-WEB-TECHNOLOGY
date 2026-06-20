const p1 =  
[
{name: "Tanvir", age: 24 , country: "Australia"},
{name: "Sakin", age: 25 , country: "Uk"},
{name: "Tamim", age: 23, country: "Australia"},
{name: "Sakib", age: 26, country: "Australia"},
];
const print=p1.filter((person) => person.country === "Australia");
console.log(print);