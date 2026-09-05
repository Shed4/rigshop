
const signUp = document.querySelector("#signupform");
const register = document.querySelector("#register");
const message = document.querySelector("#message");

// function to create an account

function createAccount(){
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

// validation to check email and password

if(email.trim() =="" || password.trim()==""){
    message.textContent="please fill in the required input to continue"
    return; 
}


const newUser = {
    id:Date.now(),
    email:email,
    password:password,
    cart:[]
};

let users =JSON.parse(localStorage.getItem("users"))|| [];
users.push(newUser);

localStorage.setItem("users",JSON.stringify(users));

// saves the user who just created an account
localStorage.setItem("currentUser",
    JSON.stringify(newUser)
);

console.log(users);

message.textContent="Account created successfully!";
signUp.reset();


//return to the main page after registration
setTimeout(()=>{
window.location.href="index.html";
}, 1000);

}
// retrieving user saved items
const savedUsers=JSON.parse(localStorage.getItem("users")) || [];
console.log(savedUsers);


register.addEventListener("click",function(event){
    event.preventDefault();
    createAccount();
});
