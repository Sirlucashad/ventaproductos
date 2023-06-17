
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

var formulario = document.getElementById(".form");
const submit = document.querySelector(".submit")


  

  submit.addEventListener("click", ()=>{  
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;  
  if ( email === "admin" && password === "1234"){  
    window.location.href = "https://www.youtube.com/";
  } else {    
    alert("email o contraseña incorrectos");
  }
  })


  

