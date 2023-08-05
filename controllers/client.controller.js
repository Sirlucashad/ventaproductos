import {clientServices} from "./../service/client-service.js"



const crearNuevoProducto = (id,url_imagen,categoria_id,titulo,valor,descripcion)=>{
    
    const contenedorProducto = document.createElement("div");
    if(categoria_id === "1"){
      contenedorProducto.classList.add("producto__star")}
      else if(categoria_id === "2"){
        contenedorProducto.classList.add("producto__consolas")
      }else{contenedorProducto.classList.add("producto__diversos")}

    
    let contenido;
    if(window.location.pathname.includes("/adminindex.html")){
      contenido = ` 
           
    <div class="iconos">
        <i class="fa-solid fa-trash" id=${id}></i>
        <a href="./admineditar.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
    </div>
    <img src="${url_imagen}" alt="">
    <h6 class="titulo">${titulo}</h6>
    <p class="precio">${valor}</p>
    <a href="" class="ver">Ver producto</a>
    
    `  } else if (window.location.pathname.includes("/index.html")){
      contenido = ` 
           
      
      <img src="${url_imagen}" alt="">
      <h6 class="titulo">${titulo}</h6>
      <p class="precio">${valor}</p>
      <a href="" class="ver">Ver producto</a>
      
      ` 
    }
   
    
    contenedorProducto.innerHTML = contenido;
    const btn = contenedorProducto.querySelector(".iconos i");
    if(btn){
    btn.addEventListener("click", () => {
      const id = btn.id;
      clientServices
        .eliminarProducto(id)
        .then((respuesta) => {
          console.log(respuesta);
        })
        .catch((err) => alert("Ocurrió un error"));
    })};
    
    const editarBtn = contenedorProducto.querySelector(".iconos a");
    if(editarBtn){
    editarBtn.addEventListener("click",()=>{
      window.location.href = "./admineditar.html"
    })
  }
  

    return contenedorProducto; 
  
  };

  
  const seccionStar = document.querySelector(".productos__seccion_star");
    const seccionConsolas = document.querySelector(".productos__seccion_consolas");
    const seccionDiversos = document.querySelector(".productos__seccion_diversos");

  
  clientServices
    .listaProductos().then((data) => {
      data.forEach(({ url_imagen,categoria_id,titulo,valor,descripcion,id }) => {
        const nuevoProducto = crearNuevoProducto(id,url_imagen,categoria_id,titulo,valor,descripcion);
        if( categoria_id === "1"){
          seccionStar.appendChild(nuevoProducto)
       }else if(categoria_id === "2"){
         seccionConsolas.appendChild(nuevoProducto);
       }else {seccionDiversos.appendChild(nuevoProducto)};
       

      });
    })
    .catch((error) => alert("Ocurrió un error"));

  

  
