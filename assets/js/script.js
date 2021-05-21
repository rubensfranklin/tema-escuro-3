const button = document.getElementById('button')

button.addEventListener('click',(event) =>{
    event.preventDefault()

    const nome = document.getElementById('nome')
    
    const cpf = document.getElementById('cpf')

    const numero = document.getElementById('numero')

    const Celular = document.getElementById('celular')

    

    if(nome.value == ''){
        nome.classList.add("errorInput");
    }

    else {
        nome.classList.remove("errorInput")
    }
    
    if(cpf.value == ''){
        cpf.classList.add("errorInput");
    }

    else {
        cpf.classList.remove("errorInput")
    }
    if (cpf.value.length <= 10) {
        alert('CPF Incompleto!!!');
        } 

        else {
            cpf.classList.remove("errorInput")
        }

    if(celular.value == ''){
        alert('Preencha o campo TELEFONE CELULAR apenas com numeros  e  sem começar com 0!!!');
    }
else {
        celular.classList.remove("errorInput")
    }
    
    if(numero.value == ''){
        alert('Você esqueceu de preencher o numero da casa');
    }
})
