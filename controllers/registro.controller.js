import {clientServices} from "./../service/client-service.js"



const form = document.querySelector(".formulario");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const url_imagen = document.querySelector(".form__imagen").value;
    const categoria_id = document.querySelector(".form__categoria").value    
    const titulo = document.querySelector(".form__titulo").value;
    const valor = document.querySelector(".form__valor").value;
    const descripcion = document.querySelector(".form__descripcion").value;
   
    


    clientServices
    .crearProducto(url_imagen,categoria_id,titulo,valor,descripcion)
    .then(() => {
        window.location.href = "https://th.bing.com/th/id/OIP.sDFvGAB_psWYVx1UNhmakQHaE6?pid=ImgDet&w=202&h=134&c=7";
      })
      .catch((err) => console.log(err));
  });

  
  
