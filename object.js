// syntax of object
// let objectName={
    // key1:"value";
    // key2:"value";
// }

console.log("hello")
let student={
    name:"sahil",
    age:20,
    address:"bhopal",
    welcome:function(){
return `Hello my name is ${this.name} and age is ${this.age}`
    }

}
console.log(student.name);//access
console.log(student);
student.gender="male";
console.log(student);
console.log(student.welcome())
