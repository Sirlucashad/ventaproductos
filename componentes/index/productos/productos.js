/*const productos = document.querySelectorAll(".productos__seccion__contenedor");
const verTodo = document.querySelector(".ver__todo");

let mostrar = false;

function mostrarTodos() {
  productos.forEach((producto) => {
    if (mostrar) {
      producto.style.display = "none";
    } else {
      producto.style.display = "block";
    }
  });

  mostrar = !mostrar; // Alternar el estado
}

verTodo.onclick = mostrarTodos;*/




/*verTodoEnlace.addEventListener('click', () => {
  mostrarTodoStar = false;
  mostrarTodoConsolas=false;
  mostrarTodoDiversos=false;

  if (mostrarTodoStar ) {
    productosStar.forEach(producto => {
      producto.style.display = 'block';
    });
    verTodoEnlace.innerHTML = '<p>Ver menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
  }
  else if (mostrarTodoConsolas ) {
    productosConsolas.forEach(producto => {
      producto.style.display = 'block';
    });
    verTodoEnlace.innerHTML = '<p>Ver menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
  }
  else if (mostrarTodoDiversos ) {
    productosDiversos.forEach(producto => {
      producto.style.display = 'block';
    });
    verTodoEnlace.innerHTML = '<p>Ver menos <i class="fa-solid fa-arrow-left" style="color: #2a7ae4;"></i></p>';
  } else {
    if (window.matchMedia('(min-width: 1140px)').matches) {
      productosContenedores.forEach((producto, index) => {
        if (index >= 6) {
          producto.style.display = 'none';
        }
      });
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      productosproductoes.forEach((producto, index) => {
        if (index >= 4) {
          producto.style.display = 'none';
        }
      });
    } else {
      productosproductoes.forEach((producto, index) => {
        if (index >= 2) {
          producto.style.display = 'none';
        }
      });
    }

    verTodoEnlace.innerHTML = '<p>Ver todo <i class="fa-solid fa-arrow-right" style="color: #2a7ae4;"></i></p>';
  }
});*/

const verTodoStar = document.querySelector('.vertodo__star');
const verTodoConsolas = document.querySelector('.vertodo__consolas');
const verTodoDiversos = document.querySelector('.vertodo__diversos');

const productosStar = document.querySelectorAll('.producto__star');
const productosConsolas = document.querySelectorAll('.producto__consolas');
const productosDiversos = document.querySelectorAll('.producto__diversos');

let mostrarTodoStar = false;

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


console.log(productosStar)

