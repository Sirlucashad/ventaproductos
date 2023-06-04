

const inputs = document.querySelectorAll("input");
const textarea = document.querySelector(".form__textarea");
console.log(inputs)
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

textarea.onfocus = ()=>{
    textarea.previousElementSibling.classList.add("top");
   
}

textarea.onblur = ()=>{
    if(textarea.value.trim().length === 0){
        textarea.previousElementSibling.classList.remove("top");

    }
   
}
