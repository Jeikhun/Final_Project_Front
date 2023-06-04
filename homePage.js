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
