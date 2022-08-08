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
    addCart(productPrice,productImg,productName)
    }})
})

function addCart(productPrice,productImg,productName) {
    
    let addtr = document.createElement("tr");
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll(".title");
        if (productT[i].innerHTML==  productName ) {
            alert("Sản phẩm này đã có trong giỏ hàng, "
            + "vui lòng tăng số lượng trong giỏ hàng khi muốn mua thêm cùng 1 loại sản phẩm!");
            return;
        }
    }
    let trcontent = `<tr>
    <td style="display:flex; align-items:center"><img style="width: 70px" src="`+productImg+`" alt=""><span class="title">`+productName+`</span></td>
    <td><p><span class="prices">`+productPrice+`</span><sup>đ</sup></p></td>
    <td><input style="width: 30px; outline: none" type="number" value="1" min="1"></td>
    <td style="cursor: pointer;"><span class="cartDelete">Xóa</span></td>
    </tr>`
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    // console.log(cartTable)
    cartTable.append(addtr); / them the tr vao cuoi  gio hang/
    cartTotal();
    deleteCart();
    changeInput();

}
// total price//
function cartTotal(){
    let cartItem = document.querySelectorAll("tbody tr");
    let totalC = 0;
    // console.log(cartItem.length);
    for (let i = 0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector("input").value;
        console.log(inputValue)
        let productPrice = cartItem[i].querySelector(".prices").innerHTML;
        console.log(productPrice);
        let totalA = inputValue * productPrice*1000;
        // let totalB = totalA.toLocaleString("de-DE");
        //  console.log(totalB);
        totalC += totalA;
        // console.log(totalC);
        // let totalD = totalC.toLocaleString("de-DE");
        
    }
    let Totals = document.getElementById("price");
    let cartIcon = document.querySelector(".cart-icon span");
    cartIcon.innerHTML = totalC.toLocaleString("de-DE");
    Totals.innerHTML = totalC.toLocaleString("de-DE");
    changeInput();
   
    // console.log(Totals);
    
}
//delete
function deleteCart(){
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++){
        let productT = document.querySelectorAll(".cartDelete");
        
        productT[i].addEventListener("click", function(event){
            let cartDelete = event.target;
            let cartItemDelete = cartDelete.parentElement.parentElement;
            cartItemDelete.remove();
            cartTotal();
        })
    }
}
function changeInput(){
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++){
        let inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function(){
            cartTotal();
        })
        
            
        
    }

} 

let cartbtn = document.querySelector(".fa-times-circle");
let showCart = document.querySelector(".fa-shopping-cart");
showCart.addEventListener("click", function(){
    console.log(showCart);
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click", function(){
    // console.log(cartbtn);
    document.querySelector(".cart").style.right = "-100%"
})
