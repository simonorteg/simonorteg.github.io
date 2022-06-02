function validar(){    
      debugger;
    let f_nombre = document.frm.f_nombre.value.trim();
    let f_edad = document.frm.getElementById("f_edad");
    let f_correo = document.frm.f_correo.value.trim();
    let tarjeta = document.frm.getElementById("b_radio");
    let interes = document.frm.ti.value;    
    let ciudad = document.frm.ci;   
    
    let errores = [];
    let inputs = document.querySelectorAll("input");
    for(i=0; i<inputs.length;i++){
     inputs[i].style.border = "revert";
    }

    if(f_nombre.value.trim() == ''){
     errores.push("el nombre no puede ser vacio");  
     f_nombre.style.border= "2px solid red";//hacer funcion css para los campos
    }else if(f_nombre.length >30){
        errores.push("el nombre no puede tener mas de 30 caracteres")
     f_nombre.style.border= "2px solid red";  //idem 
    }
     if(ciudad == 0 ) {     
        errores.push("debe selecionar una Ciudad") 
        x_mensaje.style.border="2px solid red";//
        console.log(ci.value );      
    }  
    
    if(interes == 0) {     
        errores.push("debe selecionar el Interes") 
        x_mensaje.style.border="2px solid red";//
        console.log(ti.value );      
    }
              
       
    let ltaErrores_elem = document.querySelector("#ltaErrores");
    ltaErrores_elem.innerHTML='';
    errores.forEach(e =>{
        let li = document.createElement("li");
        li.innerHTML = e;
        ltaErrores_elem.appendChild(li);
        console.log(e);
    });      
    return errores.length == 0;

}

function limpiarFormulario() {
    document.getElementById("frm").reset();    
    let inputs = document.querySelectorAll("input");    
    for(i=0; i<inputs.length;i++){        
    inputs[i].style.border = "revert";    
   }
   
  }


 
