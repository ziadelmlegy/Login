let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("email");
let userPasswordInput = document.getElementById("password");
let btnSinUp =document.getElementById("btnSinUp");

let userData=[];


btnSinUp.addEventListener("click", function(){
    // console.log(userNameInput.value)
    let userInformation={
        userName:userNameInput.value,
        email:userEmailInput.value,
        password:userPasswordInput.value,
    }
    userData.push(userInformation);
    localStorage.setItem("dataContainer" , JSON.stringify(userData))
    // console.log(userData);
    
})