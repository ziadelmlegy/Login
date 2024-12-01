let userEmailInput= document.getElementById("userEmail");
let userPasswordInput= document.getElementById("userPassword");
let btnLogin = document.getElementById("login");
let success= document.querySelector(".success");
let hint = document.querySelector(".hint");
// console.log( userEmailInput , userPasswordInput)
let userData = JSON.parse(localStorage.getItem("dataContainer"));
btnLogin.addEventListener("click", function(){
    login();
    clearForm()
})

let nameUser;
nameUser= localStorage.getItem("sessionUserName");

function login(){

    let check= {
        userEmail : userEmailInput.value,
        userPassword : userPasswordInput.value,
    };
    for(let i=0 ; i<userData.length ; i++){
        if(userData[i].email == check.userEmail && userData[i].password == check.userPassword ){
            success.classList.remove("d-none")
            localStorage.setItem("sessionUserName",userData[i].userName )
            window.location ="./home.html"; 
        }
        else{
            hint.classList.remove("d-none")
        }
    }
}

function clearForm(){
    userEmailInput.value=null;
    userPasswordInput.value=null;
}