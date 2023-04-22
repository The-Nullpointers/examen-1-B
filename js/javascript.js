function valida(f){
    var k=0;

    var selector=0;

    if (document.getElementById("nombre").value.trim().length === 0) { // Verificamos si el valor es vacío o solo contiene espacios
        Swal.fire({
          title: '¡Error!',
          text: 'El espacio del nombre se encuentra vacío',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        document.getElementById("nombre").style.backgroundColor = "#EF13088A";
        document.getElementById("nombre").focus();
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
      }
      

    if(document.getElementById("correo").value.trim().length === 0){
        Swal.fire({
            title: '¡Error!',
            text: 'El espacio del correo se encuentra vacío',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("correo").style.backgroundColor="#EF13088A";
        document.getElementById("correo").focus();
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    if(document.getElementById("asunto").value.trim().length === 0){
        Swal.fire({
            title: '¡Error!',
            text: 'El espacio del asunto se encuentra vacío',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("asunto").style.backgroundColor="#EF13088A";
        document.getElementById("asunto").focus();
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    if(document.getElementById("descripcion").value.trim().length === 0){
        Swal.fire({
            title: '¡Error!',
            text: 'El espacio de la descripción se encuentra vacío',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("descripcion").style.backgroundColor="#EF13088A";
        document.getElementById("descripcion").focus();
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }


    no = document.getElementById("nombre").value;
    if( !(/^([a-z, ñ, A-Z]){2,60}$/.test(no)) ) {
        Swal.fire({
            title: '¡Error!',
            text: 'El nombre digitado es inválido',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("telefono").style.backgroundColor="#EF13088A";
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    co = document.getElementById("correo").value;
    if( !(/@\w+([\.-]?\w+)\.\w/.test(co)) ) {
        Swal.fire({
            title: '¡Error!',
            text: 'El correo digitado es inválido',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("correo").style.backgroundColor="#EF13088A";
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    as = document.getElementById("asunto").value;
    if( !(/^([a-z, ñ, A-Z]){2,2000}$/.test(as)) ) {
        Swal.fire({
            title: '¡Error!',
            text: 'El asunto digitado es inválido',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("asunto").style.backgroundColor="#EF13088A";
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    des = document.getElementById("descripcion").value;
    if( !(/^([a-z, ñ, A-Z]){2,4000}$/.test(des)) ) {
        Swal.fire({
            title: '¡Error!',
            text: 'La descripción digitada es inválida',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        document.getElementById("descripcion").style.backgroundColor="#EF13088A";
        event.preventDefault(); // evita que la página se recargue al enviar el formulario
        selector=1;
        return false; // Detenemos la ejecución del formulario al presentar el error
    }

    event.preventDefault(); // evita que la página se recargue al enviar el formulario

    if(selector==0){ //detecta que no hay errores por corregir
        Swal.fire({
            title: 'Envío exitoso',
            text: 'Su correo ha sido enviado correctamente',
            icon: 'success',
            confirmButtonText: 'OK',
        });

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("asunto").value = "";
        document.getElementById("descripcion").value = "";

        document.getElementById("nombre").style.backgroundColor="white";
        document.getElementById("correo").style.backgroundColor="white";
        document.getElementById("asunto").style.backgroundColor="white";
        document.getElementById("descripcion").style.backgroundColor="white";

    }else{
        
    }

    
}