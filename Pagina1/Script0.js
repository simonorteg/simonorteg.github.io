
function ver(e){
    console.log(e);
}
function validar(){       
    let f_nombre = document.getElementById("f_nombre");
    let f_edad = document.querySelector("#f_edad");
    let f_correo = document.frm.f_correo;
    //aca van los otros campos como ciudad, interes etc;
    let errores = [];
    let inputs = document.querySelectorAll("input");
    for(i=0; i<inputs.length;i++){
     inputs[i].style.border = "revert";
    }

    if(f_nombre.value.trim() == ''){
     errores.push("el nombre no puede ser vacio");  
     f_nombre.style.border= "2px solid red";
    }else if(f_nombre.length >30){
        errores.push("el nombre no puede tener mas de 30 caracteres")
     f_nombre.style.border= "2px solid red";   
    }
    if(f_edad.value.trim() ==''){
        errores.push("Edad no debe estar vacio");
        f_edad.style.border= "2px solid red";
    }else if(isNaN(f_edad.value)){   
        errores.push("Debe ingresar un numero")
        f_edad.style.border= "2px solid red";
    }else if(f_edad.value < 18){   
        errores.push("Debe ser mayor de edad")
       f_edad.style.border= "2px solid red";
    }

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(f_correo.value ==''){
        errores.push("debe ingresar un correo");
        f_correo.style.border= "2px solid red";
    }else if(!re.test(f_correo.value)){
        errores.push("Debe ingresar una direccion valida")
        f_correo.style.border= "2px solid red";
    }  
    
    let ltaErrores_elem = document.querySelector("#ltaErrores");
    ltaErrores_elem.innerHTML='';
    errores.forEach(e =>{
        let li = document.createElement("ol");
        li.innerHTML = e;

        ltaErrores_elem.appendChild(li);
        console.log(e);
    });      
    return errores.length == 0;
}
