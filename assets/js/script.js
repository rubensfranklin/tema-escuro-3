const button = document.getElementById('button')

button.addEventListener('click',(event) =>{
    event.preventDefault()

    const nome = document.getElementById('nome')
    
    const cpf = document.getElementById('cpf')

    const numero = document.getElementById('numero')

    const Celular = document.getElementById('celular')

    

    if(nome.value == ''){
        alert('Preencha o nome');
    }

    
    if(cpf.value == ''){
        alert('Preencha o CPF');
    }


    if(celular.value == ''){
        alert('Preencha o Numero de celular sem o 0');
    }

    
    if(numero.value == ''){
        alert('Preencha o numero da casa');
    }


})













