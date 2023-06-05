const REGEX_Mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const email = document.querySelector(".mailInput")
const emailText = document.querySelector("#emailText");
const pass = document.querySelector(".passInput")
const passText = document.querySelector("#passText");
const confirmm = document.querySelector(".confirmm")
const confirmText = document.querySelector("#confirmText");
const REGEX_Pass  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
let jTargetValue;
email.addEventListener("keyup", (e)=>{
    if(REGEX_Mail.test(e.target.value)){
    emailText.textContent = "Correct"
    emailText.style.color = "green"
}
else{
    emailText.textContent = "Incorrect";
    emailText.style.color = "red"
}
})
pass.addEventListener("keyup", (e)=>{
    if(REGEX_Pass.test(e.target.value)){
        passText.textContent = "Correct"
        passText.style.color = "green"
        if(e.target.value!=jTargetValue){
            confirmText.textContent = "Incorrect";
            confirmText.style.color = "red"
        }
        else if(e.target.value==jTargetValue){
            confirmText.textContent = "Correct";
            confirmText.style.color = "green"
        }
    }
    else{
        passText.textContent = "Incorrect";
        passText.style.color = "red"
        if(e.target.value!=jTargetValue){
            confirmText.textContent = "Incorrect";
            confirmText.style.color = "red"
        }
    }
    confirmm.addEventListener("keyup", (j)=>{
        jTargetValue = j.target.value;
        if(e.target.value==j.target.value && j.target.value){
            confirmText.textContent = "Correct"
            confirmText.style.color = "green"
        }
        else if(j.target.value==null){
            confirmText.textContent = "Incorrect";
            confirmText.style.color = "red"
        }
        else{
            confirmText.textContent = "Incorrect";
            confirmText.style.color = "red"
        }
    })
})

