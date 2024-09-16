const toggleButton = document.querySelector('#toggleModal');
const modal = document.querySelector('#modal');
const quitar = document.querySelector('#close');
const email = document.querySelector('#email');
const error_message = document.querySelector('.error_message');


toggleButton.addEventListener('click', toggleModal);
email.addEventListener('input', enviarCorreo);
quitar.addEventListener('click',cerrar );

/* Funcion para activar el modal */
function toggleModal() {
    let email_address = email.value;
    let email_Div = email_address.split('@');

    if (email_address.includes('@') && email_Div.length <= 2 && email_Div[1].includes('.')) {
        modal.classList.remove('hidden');
        
    } else {
        error_message.textContent = "Valid Email Required";
        email.classList.add('invalid')
    }
}
/* Funcion para validar el correo */
function enviarCorreo() {
    let email_address = email.value;
    let email_Div = email_address.split('@');

    if (email_address.includes('@') && email_Div.length <= 2 && email_Div[1].includes('.')) {
        email.classList.remove('invalid');
    } else {
        email.classList.add('invalid');
    }
}
/* Funcion para cerrar mensaje */
function cerrar() {
modal.classList.add('hidden');  
}
