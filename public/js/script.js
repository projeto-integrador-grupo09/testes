
window.onload = function () {

    event.preventDefault();

    let inputName = document.getElementById('nome');

    inputName.addEventListener('blur', (event) => {
        if (inputName.value.length <=3 || inputName.value.length <= '3') {
            alert('Preencher o campo com os critérios necessários');
        } else if (inputName.value.length == "") {
            alert ('Nome não informado');
        } else {
            alert ('Proximo campo')
        };
    });

};