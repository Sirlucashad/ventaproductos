const textareaDescripcion = document.querySelector(".form__descripcion")

textareaDescripcion.onfocus = ()=>{
    textareaDescripcion.previousElementSibling.classList.add("top");
   
}

textareaDescripcion.onblur = ()=>{
    if(textareaDescripcion.value.trim().length === 0){
        textareaDescripcion.previousElementSibling.classList.remove("top");

    }
   
}
