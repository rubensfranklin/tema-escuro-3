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

    if(celular.value == ''){
        alert('Preencha o campo TELEFONE CELULAR apenas com numeros  e  sem começar com 0!!!');
    }

    
    if(numero.value == ''){
        alert('Você esqueceu de preencher o numero da casa');
    }


})



const formEl = document.querySelector("form");
formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formEl);
    const formDataSerialized = Object.fromEntries(formData);
    const jsonObject = {
        ...formDataSerialized
        };
        try {
            const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(jsonObject),
            headers: {
                "Content-Type": "application/json",
            },
          });
          const json = await response.json();
          console.log(json);
        } catch (e) {
        console.error(e);
        alert("Ocorreu um erro, tente eniar o formulário novamente!");
    }
})









