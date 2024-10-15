const Person={
 name:"xyz" ,
 age:30 ,
}
const newPerson={...Person,name:"BUI"};
console.log(Person);
newPerson.age=35;
console.log(Person);
console.log(newPerson);


const emp=["pra",35,10001.50];
const emp1=[...emp];
const emp2=[...emp,"GZB"];
console.log(emp);
console.log(emp1);
console.log(emp2);