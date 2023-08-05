import { clientServices } from "../service/client-service.js";

//Obtener la pagina, y el id
//Obtener el valor de los imputs
//Obtener los datos del perfil del producto correpondientes al id de la url
//reasignar los valores introducidos en los campos por el usuario al perfil leido de la db
//verificar si la url es mayor a 404 y tirar error
//

const formulario = document.querySelector(".formulario");

const obtenerInformacion = async() =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        window.location.href ="#"    
    }

const url_imagen = document.querySelector(".form__imagen");
const categoria = document.querySelector(".form__categoria");
const titulo = document.querySelector(".form__titulo");
const valor = document.querySelector(".form__valor");
const descripcion = document.querySelector(".form__descripcion");

try{
    const perfil = await clientServices.detalleProducto(id);
if(perfil.url_imagen && perfil.categoria_id && perfil.titulo && perfil.valor && perfil.descripcion){
    url_imagen.value = perfil.url_imagen;
    categoria.value = perfil.categoria_id;
    titulo.value = perfil.titulo;
    valor.value = perfil.valor;
    descripcion.value = perfil.descripcion;
}else{
    throw new Error("No se han podido leer los valores de cada input")
}}
catch(error){
    window.location.href = "#";
}
};


obtenerInformacion();

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const url_imagen = document.querySelector(".form__imagen").value;
    const categoria_id = document.querySelector(".form__categoria").value;
    const titulo = document.querySelector(".form__titulo").value;
    const valor = document.querySelector(".form__valor").value;
    const descripcion = document.querySelector(".form__descripcion").value;
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    clientServices.actualizarProducto(id,url_imagen,categoria_id,titulo,valor, descripcion).then(()=>{
        window.location.href = "https://app.bamba.ar/assets/img/icons/success.png"
    })

})