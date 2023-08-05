

document.querySelector(".ulogin__btn").addEventListener("click", ()=>{
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".form h2").innerHTML="User";
  });

document.querySelector(".admlogin__btn").addEventListener("click", ()=>{
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".form h2").innerHTML="Admin";
    });

document.querySelector(".popup .close-btn").addEventListener("click",()=>{
    document.querySelector(".popup").classList.remove("active");
});

//---------------------------------------------------------------------------------*/

var formulario = document.querySelector(".form");
const submit = document.querySelector(".submit")
const email = document.querySelector("#email");
const password = document.querySelector("#password");

email.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    event.preventDefault();
    password.focus();
  }})

  password.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
      event.preventDefault();
      submit.focus();
    }})
  

  submit.addEventListener("click", ()=>{  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;  
  if ( email === "admin" && password === "1234"){  
    window.location.href = "./adminindex.html";
  } else {    
    alert("email o contraseña incorrectos");
  }
  })


  

