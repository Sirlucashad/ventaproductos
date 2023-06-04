
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

console.log("Aca si")