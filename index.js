function enviarFormulario() { // Creamos una funcion llamada "enviarFormulario" el cual esta conectado con nuestro button para cuando hagamos click nos de la funcion que creamos con ONCLICK. 
    const elementoNombre = document.getElementById("nombreUsuario").value; // Hacemos nuestro Const con un nombre que utilizaremos mas adelante para que cuando completemos nuestro fomulario, nos devuelva nuestro nombre
    const coheteEmoji = '\u{1F680}'; // creamos otro const con un emoji
    
    alert("Se ha enviado tu formulario correctamente. " + "Muchas Gracias " + elementoNombre + coheteEmoji); //esta es la parte mas interativa porque creamos nuestro alert, todo lo conectamos con nuestro HTML y al enviar nuestro form y apretar el boton lo que estamos haciendo es que nos de el texto que pedimos y ademas el nombre que se coloco en su input y para darle la frutilla al postre seria nuestro cohete.
}