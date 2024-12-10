// syntax of object
// let objectName={
    // key1:"value";
    // key2:"value";
// }

// console.log("hello")
// let student={
//     name:"sahil",
//     age:20,
//     address:"bhopal",
//     welcome:function(){
// return `Hello my name is ${this.name} and age is ${this.age}`
//     }

// }
// console.log(student.name);//access
// console.log(student);
// student.gender="male";
// console.log(student);
// console.log(student.welcome())


// const st=()=>{
//     let student={name:"sahil",age:23, city:"bhopal" }
//     const{name,age, city}=student;
//     console.log(age);
// }
// st();


// spread operater(...)
const1=()=>{
    // let obj1={name:"sahil",  city:"bhopal" }
    // let obj2={age:23, city:"banaras"}
    // let newobj={...obj1,...obj2}
    // console.log(newobj)
    let arr1=[1,2,3,4,5,6];
    let newarr=arr1.map((num)=>num+2);
    console.log(newarr);
    
}
const1();
