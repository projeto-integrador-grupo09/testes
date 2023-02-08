
window.onload = function () {

    event.preventDefault();

    let inputName = document.getElementById('nome');

    inputName.addEventListener('blur', (event) => {
        if (inputName.value.length == 0) {
            alert('Nome não informado');
        } else if (inputName.value.length <=3) {
            alert ('Preencher o campo com os critérios necessários');
        } else {
            alert ('Proximo campo');
        };
    });

};

// let inputSenha = document.getElementById('psw');
// let inputConfSenha = document.getElementById('psw-conf');

// if (inputSenha.value != inputConfSenha){
//    alert ('Senhas não conferem');
// }

