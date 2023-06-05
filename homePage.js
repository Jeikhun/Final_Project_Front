const REGEX_Mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const email = document.querySelector(".mailInput");
const emailText = document.querySelector("#emailText");


const burgerMenu = document.querySelector(".burger_menu");
const sideBar = document.querySelector(".sidebar");
burgerMenu.addEventListener("click", (e)=>{
    console.log(sideBar.style.display);
    if(sideBar.style.display == "none" || !sideBar.style.display){
        sideBar.style.display = "flex";
    }
    else{
        sideBar.style.display = "none"; 

    }


})


email.addEventListener("click", (e)=>{
    if(REGEX_Mail.test(emailText.value)){
        // console.log(emailText.value);
        emailText.style.color = "#66FF99"
}
    else{
    // console.log(emailText.value);
    emailText.style.color = "red";
    myFunction();
}
})

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


