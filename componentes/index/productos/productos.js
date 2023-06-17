const verTodoStar = document.querySelector(".vertodo__star")
const verTodoConsolas = document.querySelector(".vertodo__consolas")
const verTodoDiversos = document.querySelector(".vertodo__diversos")

const productosStar = document.querySelectorAll(".starwars")
const productosConsolas = document.querySelectorAll(".producto.consolas")
const productosDiversos = document.querySelectorAll(".producto.diversos")



verTodoStar.addEventListener("click",()=>{
    productosStar.forEach((producto)=>{
        producto.classList.toggle("mostrar")
    })
    
})

verTodoConsolas.addEventListener("click",()=>{
    productosConsolas.forEach((producto)=>{
        producto.classList.toggle("mostrar")
    })
})

verTodoDiversos.addEventListener("click",()=>{
    productosDiversos.forEach((producto)=>{
        producto.classList.toggle("mostrar")
    })
})


console.log(verTodoStar)

