

const verTodoStar = document.querySelector('.vertodo__star_wars');
const verTodoConsolas = document.querySelector('.vertodo__consolas');
const verTodoDiversos = document.querySelector('.vertodo__diversos');

const productosStar = document.querySelectorAll('.producto__star');
const productosConsolas = document.querySelectorAll('.producto__consolas');
const productosDiversos = document.querySelectorAll('.producto__diversos');

let mostrarTodoStar = false;
let mostrarTodoConsolas = false;
let mostrarTodoDiversos =false;

verTodoStar.addEventListener("click",()=>{
   mostrarTodoStar = !mostrarTodoStar

  if(mostrarTodoStar){
    productosStar.forEach( producto =>{
      producto.style.display = "block";
    })
    verTodoStar.innerHTML = '<p>Mostrar menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
  } else {
    if (window.matchMedia('(min-width: 1140px)').matches) {
      productosStar.forEach((producto, index) => {
        if (index >= 6) {
          producto.style.display = 'none';
        }
      });
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      productosStar.forEach((producto, index) => {
        if (index >= 4) {
          producto.style.display = 'none';
        }
      });
    } else {
      productosStar.forEach((producto, index) => {
        if (index >= 2) {
          producto.style.display = 'none';
        }
      });
    }

    verTodoStar.innerHTML = '<p>Ver todo <i class="fa-solid fa-arrow-right" style="color: #2a7ae4;"></i></p>';
  }
})

verTodoConsolas.addEventListener("click",()=>{
  mostrarTodoConsolas = !mostrarTodoConsolas

 if(mostrarTodoConsolas){
   productosConsolas.forEach( producto =>{
     producto.style.display = "block";
   })
   verTodoConsolas.innerHTML = '<p>Mostrar menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
 } else {
   if (window.matchMedia('(min-width: 1140px)').matches) {
     productosConsolas.forEach((producto, index) => {
       if (index >= 6) {
         producto.style.display = 'none';
       }
     });
   } else if (window.matchMedia('(min-width: 768px)').matches) {
     productosConsolas.forEach((producto, index) => {
       if (index >= 4) {
         producto.style.display = 'none';
       }
     });
   } else {
     productosConsolas.forEach((producto, index) => {
       if (index >= 2) {
         producto.style.display = 'none';
       }
     });
   }

   verTodoConsolas.innerHTML = '<p>Ver todo <i class="fa-solid fa-arrow-right" style="color: #2a7ae4;"></i></p>';
 }
})

verTodoDiversos.addEventListener("click",()=>{
  mostrarTodoDiversos = !mostrarTodoDiversos

 if(mostrarTodoDiversos){
   productosDiversos.forEach( producto =>{
     producto.style.display = "block";
   })
   verTodoDiversos.innerHTML = '<p>Mostrar menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
 } else {
   if (window.matchMedia('(min-width: 1140px)').matches) {
     productosDiversos.forEach((producto, index) => {
       if (index >= 6) {
         producto.style.display = 'none';
       }
     });
   } else if (window.matchMedia('(min-width: 768px)').matches) {
     productosDiversos.forEach((producto, index) => {
       if (index >= 4) {
         producto.style.display = 'none';
       }
     });
   } else {
     productosDiversos.forEach((producto, index) => {
       if (index >= 2) {
         producto.style.display = 'none';
       }
     });
   }

   verTodoDiversos.innerHTML = '<p>Ver todo <i class="fa-solid fa-arrow-right" style="color: #2a7ae4;"></i></p>';
 }
})

