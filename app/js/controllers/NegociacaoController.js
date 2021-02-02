class NegociacaoController {
    constructor() {
        //PEGANDO OS DADOS DIRETO DO FORM
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        //PREVININDO O SUBMIT
        event.preventDefault();
        //POPULANDO PARÂMETROS DA CLASSE
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        console.log(negociacao);
    }
}
