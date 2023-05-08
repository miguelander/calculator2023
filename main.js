const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');



botones.forEach(boton =>{
    boton.addEventListener('click', ()=>{
       const botonApretado = boton.textContent;

        if(boton.id === "c"){
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error de sitaxis"){
                pantalla.textContent = "0";
            }
            
            else{
            pantalla.textContent = pantalla.textContent.slice(0, -1);     
            }
        return
        }
        if(boton.id === "igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return; 
            } catch (error) {
                 pantalla.textContent = "Error de sitaxis";
                return error;
                
            }
            
        }
    
       if(pantalla.textContent === "0"  || pantalla.textContent === "Error de sitaxis"){
        pantalla.textContent = botonApretado; 
       }else{
        pantalla.textContent += botonApretado;
       }

     })
})

