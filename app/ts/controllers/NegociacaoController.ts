class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        //PEGANDO OS DADOS DIRETO DO FORM
        this._inputData = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade =<HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
    }

    adiciona(event : Event) {
        //PREVININDO O SUBMIT
        event.preventDefault();
        //POPULANDO PARÂMETROS DA CLASSE
        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value);

        console.log(negociacao);
    }
}