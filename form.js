let sub=()=>{
let name=document.querySelector("#name").value;
let number=document.querySelector("number").value;
let email=document.querySelector("email");
let pass=document.querySelector("pass");
let CPass=document.querySelector("CPass");


let errorname=document.querySelector("#errorname");
let errornum=document.querySelector("#errornum");
let erroremail=document.querySelector("#erroremail");
let errorpass=document.querySelector("#errorpass");
let errorCpass=document.querySelector("#errorCpass");

if(name==""){
    errorname.textContent="please enter your name";
    errorname.style.color="red";
    errorname.style.fontSize="30px";
    return false;
}
else if(number==""){
    errornumber.textContent="please enter your number";
    errornumber.style.color="red";
    error.style.fontSize="30px"; 
    return false;
}
else if(isNaN(number)){
    errornumber.innerHTML="please enter number only";
    return false;
}
else if(number.length!==10){
    errornumber
}


}