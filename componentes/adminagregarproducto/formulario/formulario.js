const inputs = document.querySelectorAll("input");
const select = document.querySelector(".form__categoria");
const textarea = document.querySelector(".form__descripcion")

inputs.forEach((input)=>{
    input.onfocus = ()=>{
        input.previousElementSibling.classList.add("top")
    }

    input.onblur = ()=>{
        if(input.value.trim().length === 0){
            input.previousElementSibling.classList.remove("top");            
        }
    }

    
})

select.onfocus = ()=>{
    select.previousElementSibling.classList.add("top");
   
}

select.onblur = ()=>{
    if(select.value.trim().length === 0){
        select.previousElementSibling.classList.remove("top");

    }
   
}

textarea.onfocus = ()=>{
    textarea.previousElementSibling.classList.add("top");
   
}

textarea.onblur = ()=>{
    if(textarea.value.trim().length === 0){
        textarea.previousElementSibling.classList.remove("top");

    }
   
}
