function Validar(){
    var nombre = document.fvalidar.nombre.value.trim();
    if(!nombre){
        alert("Escriba un nombre")
        document.fvalidar.nombre.focus()
        return false;
    }
    var apellido = document.fvalidar.apellido.value.trim();
    if(!apellido){
        alert("Escriba un apellido")
        document.fvalidar.apellido.focus()
        return false;
    }
   alert("Felicidades, el formulario se envio Exitosamente");
    return true;
}

function validateEmailAddress(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }

