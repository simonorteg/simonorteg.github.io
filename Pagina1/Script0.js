
function ver(e){
    console.log(e);
}
function validar(){   

    let f_nombre = document.getElementById("f_nombre");
    let f_edad = document.querySelector("#f_edad");
    let f_correo = document.frm.f_correo;
    let ciudad = document.getElementById("ci");
    let interes =  document.getElementById("ti");

    
    let errores = [];
    let inputs = document.querySelectorAll("input");
        
    for(i=0; i<inputs.length;i++){
     inputs[i].style.border = "revert";
    }

    if(f_nombre.value.trim() == ''){
     errores.push("el nombre no puede ser vacio");  
     cambiarEstiloBordeNombre()
    }else if(f_nombre.length >40){
        errores.push("el nombre no puede tener mas de 30 caracteres")
        cambiarEstiloBordeNombre()  
    }else{
        cambiarEstiloBordeNombre()
    }

    if(f_edad.value.trim() ==''){
        errores.push("Edad no debe estar vacio");
        cambiarEstiloBordeEdad()
    }else if(isNaN(f_edad.value)){   
        errores.push("Debe ingresar un numero")
        cambiarEstiloBordeEdad()
    }else if(f_edad.value < 18){   
        errores.push("Debe ser mayor de edad")
        cambiarEstiloBordeEdad()
    }else{
        cambiarEstiloBordeEdad()
    }

    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(f_correo.value ==''){
        errores.push("debe ingresar un correo");
        cambiarEstiloBordeCorreo();
    }else if(!re.test(f_correo.value)){
        errores.push("Debe ingresar una direccion valida")
        cambiarEstiloBordeCorreo();        
    } else{
        cambiarEstiloBordeCorreo(); 
    } 

    if(+ciudad.value==0)
    errores.push("Debe ingresar una ciudad ");

    if(+interes.value==0)
    errores.push("Debe ingresar un Iterés ");

    console.log(ciudad.value);
   
    

    /*switch (+ciudad.value) {
        case 0:
            errores.push("Debe ingresar una ciudad ");
            break;
            case 1:
                errores.push(`Ciudad Elegida : Gran Buenos Aires`)
            break;
            case 2:
                errores.push(`Ciudad Elegida: Capital Federal `)
            break;
            case 3:
                errores.push(`Ciudad Elegida: Interior de Pais`)
            break;
            case 4:
                errores.push(`Ciudad Elegida: Sudamerica`)
            break;
            case 5:
                errores.push(`Ciudad Elegida : Otra`)
            break;           
    
    } 

    switch (+interes.value) {
        case 0:
            errores.push("Debe ingresar un Interes")
            break;
            case 1:
                errores.push(`Interes : Personal`)
            break;
            case 2:
                errores.push(`Interes : Empresarial `)
            break;
            case 3:
                errores.push(`Interes : Otro`)
            break;           
    
    }  */ 
    
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


  function cambiarEstiloBordeCorreo(){
   let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var principal=document.getElementById('f_correo'); 
 if(principal.value =='' || !re.test(principal.value)){
     principal.style.borderColor="#ff0000";      
 }else{
     principal.style.borderColor="#00ff00";  
}}

  function cambiarEstiloBordeNombre(){
    var principal=document.getElementById('f_nombre');        
    if(principal.value ==''|| principal.value >40){
        principal.style.borderColor="#ff0000";      
    }else{
        principal.style.borderColor="#00ff00";  
  }}
  function cambiarEstiloBordeEdad(){
    var principal=document.getElementById('f_edad');        
    if(principal.value ==''|| isNaN(principal.value) || principal.value < 18){
        principal.style.borderColor="#ff0000";      
    }else{
        principal.style.borderColor="#00ff00";  
  }}
  function limpiar(){
    let inputs = document.querySelectorAll("input");
   inputs ="";
   
    document.frm.ci.value="0";
    document.frm.ti.value="0";
    
   
    
}

  

  


