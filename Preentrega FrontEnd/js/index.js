//LOGIN
function validarForm() {
    const emailValido = "user@mail.com";
    const pswValido = "user123";

    const usrEmail = document.getElementById('id_mail').value;
    const usrPsw = document.getElementById('id_psw').value;

    let esValido = true;

    //validar email vacio
    if(usrEmail.length < 1) {
        mostrarError('empty_email', 'El campo no puede estar vacio');
        esValido = false;
    } else {
        ocultarError('empty_email');
    }


    //validar contraseña vacia
    if(usrPsw.length < 1) {
        mostrarError('empty_psw', 'El campo contraseña no puede estar vacio');
        esValido = false;
    } else {
        ocultarError('empty_psw');
    }

    if (emailValido !== usrEmail || pswValido !== usrPsw) {
        mostrarError('login_error', 'Las credenciales no son validas');
        esValido = false;
    }   else {
        ocultarError('login_error');
    }

    return esValido;
}

function mostrarError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = "✖️ " + message;
    errorElement.style.display = 'block';
}

function ocultarError(fieldId) {
    const errorElement = document.getElementById(fieldId);
    errorElement.style.display = 'none';

}

//Listener para el boton Ingresar
const btnIngresar = document.getElementById('btn_login');
btnIngresar.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Entramos en el listener");

    if(validarForm()) {
        window.location.href = "pages/bienvenida.html";
    }
});