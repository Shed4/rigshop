const products =document.querySelector("#products");
const price=document.querySelector("#price");
const previous=document.querySelector("#previous");
const next=document.querySelector("#next");
const addToCart=document.querySelectorAll(".add-cart");
const notification = document.querySelector("#notification");


/*
const mainImage=document.querySelector("#mainimage");
const productImage=document.querySelectorAll(".product-image");

productImage[0].onclick = function(){
    mainImage.src=productImage[0].src;
}
productImage[1].onclick = function(){
    mainImage.src=productImage[1].src;}

 productImage[2].onclick = function(){
    mainImage.src=productImage[2].src;}

    productImage[3].onclick = function(){
    mainImage.src=productImage[3].src;}
*/

 //function to change images
const mainImage=document.querySelectorAll(".mainimage");
const productImage=document.querySelectorAll(".product-image");
/*
function changeImage(image){
    mainImage.src=image.src;
    console.log(mainImage.src);
}

productImage.forEach((image) => {
    image.addEventListener("click",function(){
        changeImage(image);
    });
});
*/

// To add item to cart

const productName= document.querySelector("#productname");
//get logged in user 
//let  currentUser =JSON.parse(localStorage.getItem("currentUser"));

// to get user's cart or empty cart
let cart=JSON.parse(localStorage.getItem("cart")) || [];

function addItemToCart(index){

   /* if(!currentUser){
        alert("please create account first");
        window.location.href="register.html";
        return;
    }  */
    const product ={
        id:Date.now(),
        productName:productName.textContent,
        image:mainImage[index].getAttribute("src"),
        price:Number(price.textContent.replace(/[$]/g,""))
    };
    cart.push(product);
    console.log(cart);
  
    // save cart
    localStorage.setItem("cart",JSON.stringify(cart));
    /*
    currentUser.cart.push( product);
    console.log(currentUser.cart);

    //save only this user's cart
   // localStorage.setItem(currentUser,JSON.stringify(cart));
   
  // update current User
  localStorage.setItem("currentUser", JSON.stringify(currentUser));


  //Updating users list too
  let users=JSON.parse(localStorage.getItem("users")) || [];

  let index =users.findIndex( user => user.id == currentUser.id);

  users[index]=currentUser;
  localStorage.setItem("users",JSON.stringify(users)); */



    // nofity user when an item is added
    notification.classList.remove("hidden");
    alert("product added to cart")
}
addToCart.forEach((button,index)=> {
    

button.addEventListener("click",function(){
    addItemToCart(index);
});

});

//function to view added items on cart
 const cartIcon=document.querySelector("#cart-icon");

 function showItem(){
    const cartContainer =document.querySelector("#cart-items");
 /* if(!currentUser){

    alert("please creat an account to view cart");
    window.location.href="register.html";
    return;
 } */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
if(cart.length ===0){
    alert("You have an empty cart.")
    return;
}
 notification.classList.add("hidden");
  window.location.href ="cart.html";
 
  /* cartContainer.innerHTML ="";
   currentUser.cart.forEach((item) =>{
    cartContainer.innerHTML +=`<div><img src="${item.image}" width="200">
    <h2>${item.productName}</h2>
    <h2>${item.price}</h2>
    </div>`;
 }); */

    } 
 console.log(cart);
 
 cartIcon.addEventListener("click",showItem); 