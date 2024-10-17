//object destructing

const person={
    name:"xyz",
    age:20,
    salary: 1000.50,
}
console.log(person.name);
console.log(person.age);
console.log(person.salary);

const{name,age,salary}=person;
console.log(name);
console.log(age);
console.log(salary);

// array destructing

const emp=["ABC",23,100123,"GZB"];
const[n,a,s,c]=emp;
console.log(n);
console.log(a);
console.log(s);
console.log(c);