class CalcController {
    constructor(){

        // _ é a convenção para atributo privado
        this._displayCalc = '0'
        this._currentDate
        this.initialize()

    }

    initialize(){
        let displayCalcEl = document.querySelector("#display")
        let dateEl = document.querySelector("#data")
        let timeEl = document.querySelector("#hora")

        // innerHTML = manipula os arquivos dentro do HTML
        displayCalcEl.innerHTML = '4567'
        dateEl.innerHTML = '02/09/20'
        timeEl.innerHTML = '23:59'
    }

    get displayCalc(){
        return this._displayCalc
    }

    set displayCalc(valor){
        this._displayCalc = valor
    }

    get dataAtual(){
        return this._currentDate
    }
    set dataAtual(valor){
        this._dataAtual = valor
    }
}