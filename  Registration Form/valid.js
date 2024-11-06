const reg=document.getElementById("register");
reg.addEventListener('submit',(e)=>{
    e.preventDefault();
    validate();
})
reg.addEventListener('submit',(e)=>{
    console.log("form submitted");
})
function validate(){
    const mono=document.getElementById("Mobile");
    if(isNaN(mono.value) || mono.value.length !=10){
        alert("Mobile Number is invalid");
        return false;
    }
    return false;
}