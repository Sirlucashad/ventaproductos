

const listaProductos = ()=>{
  return fetch("http://localhost:3000/productos").then((respuesta)=>respuesta.json());
}

const crearProducto = (url_imagen, categoria_id, titulo, valor, descripcion)=>{
 
  return fetch("http://localhost:3000/productos",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({ id: uuid.v4(), url_imagen,categoria_id,titulo,valor,descripcion})
  })

};

const eliminarProducto = (id) =>{
  return fetch(`http://localhost:3000/productos/${id}`,{
    method:"DELETE",
  })
}

const detalleProducto = (id) =>{
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta)=>respuesta.json())
}

const actualizarProducto = (id, url_imagen, categoria_id, titulo, valor, descripcion)=>{
  return fetch(`http://localhost:3000/productos/${id}`,{
    method:"PUT",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id, url_imagen, categoria_id, titulo, valor, descripcion})
  }).then((response)=>response)
    .catch((err)=>console.log(err));
}



  
export const clientServices = {
  listaProductos,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};
