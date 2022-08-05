let btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function(button,index){
button.addEventListener("click", function(event){{
    let btnItem = event.target;
    let product = btnItem.parentElement;
    let productImg = product.querySelector("img").src;
    let productName = product.querySelector("h1").innerText;
    let productPrice = product.querySelector("span").innerText;
    
// console.log(productImg,productName,productPrice)
    addcart(productPrice,productImg,productName)
    }})
})