const heart = document.querySelectorAll(".heart");
const favorites = document.querySelector(".favorites");
const favoritesText = document.querySelector(".favorites>h5");
const nft = document.querySelector(".nfts");
const nftText = document.querySelector(".nfts>h5");
const cardCount = document.querySelector(".count");
const searchInput = document.querySelector(".input > input");
const artistInfo = document.querySelectorAll(".artistt_info>h5");
const card = document.querySelectorAll(".card");

let state= 1;
heart.forEach(element => {
    element.addEventListener("click", (e)=>{
        if(e.target.style.color == "white" ||!e.target.style.color){
            cardCount.textContent++;
            e.target.style.color = "red"
            // console.log(element.parentElement.parentElement.id);
            // localStorage.setItem(element.parentElement.parentElement.id , JSON.stringify(element.parentElement.parentElement));
            // const img = element.parentElement.children[0];
            // const imgSrc = img.getAttribute("src");
            // const title = element.parentElement.children[0].innerHTML;
            // const desc = element.parentElement.children[1].innerHTML;
            // setLocal(imgSrc , title, desc);

        }
        else if(e.target.style.color == "red"){
            cardCount.textContent--; 
            e.target.style.color = "white"
            if(state==2){
                e.target.parentElement.parentElement.style.display='none'
            }
            
        }
    
    })
});
favorites.addEventListener("click", ()=>{
    nft.style.border = "none";
    favorites.style.borderBottom = "2px solid #858584"
    state=2;
    nftText.style.color = "#858584"
    favoritesText.style.color = "white"
    heart.forEach(element => {
        if(element.style.color=="white"||!element.style.color){
            element.parentElement.parentElement.style.display = "none"
        }
    
        // element.addEventListener("click", (e)=>{
        //     if(e.target.style.color == "red"){
        //         element.parentElement.parentElement.style.display = "none";
        //     }

        // })

    })
    // heart.forEach(element => {
    //     element.addEventListener("click", (e)=>{
    //         if(e.target.style.color == "red"){
    //             cardCount.textContent--;
    //             e.target.style.color = "white"
    //             // element.parentElement.parentElement.style.display = "none"
    //         }
    //     })
    // })
})
nft.addEventListener("click", ()=>{
    nft.style.borderBottom = "2px solid #858584";
    favorites.style.border = "none"
    state=1;
    nftText.style.color = "white"
    favoritesText.style.color = "#858584"
    heart.forEach(element => {
        element.parentElement.parentElement.style.display = "flex"

    })

})
searchInput.addEventListener("keyup", (e)=>{
    for (let i = 0; i < artistInfo.length; i++) {
        if(artistInfo[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
            card[i].style.display = "block";
        }
        else{
            card[i].style.display = "none";
        }
        
    }
})

const setLocal = (imgSrc, title, desc)=>{
const basket1 = localStorage.getItem("basket");
if(basket1 == null){
    localStorage.setItem("basket", JSON.stringify([]));
}
const obj = {
    imgSrc: imgSrc,
    title: title,
    desc: desc,

}
var JsonBasket = localStorage.getItem("basket")
const basket = Json.parse(JsonBasket);
basket.push(obj);
JsonBasket = JSON.stringify(basket);
localStorage.setItem("basket", JsonBasket);

}


