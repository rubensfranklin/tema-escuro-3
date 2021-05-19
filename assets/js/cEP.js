
//limpar o formulário toda vez que executar o CEP.
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = ' ';
    document.getElementById('bairro').value = ' ';
    document.getElementById('localidade').value = ' ';
    document.getElementById('uf').value = ' ';
}

//aparecer as informações que puxei pelo API da ViaCEP.
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}

//validação do CEP.
const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//pesquisar o CEP e verificar se é incorreto ou não encontrado.
const pesquisarCep = async() => {
    limparFormulario();
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
}

//sempre que sair do campo do CEP, é executado o código automaticamente
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
