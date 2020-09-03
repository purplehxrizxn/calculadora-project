class CalcController {
    constructor(){

        // _ é a convenção para atributo privado
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this.initButtonsEvents()

    }

    initialize(){
        setInterval(() =>{
            this.setDisplayDateTime()
        }, 1000)
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }

    initButtonsEvents(){
        /*o querySelector atende a apenas um elemento e o 
        querySelectorAll atende a todos */
        let buttons = document.querySelectorAll('#buttons > g, #parts > g')
        
        // a partir de 2 argumentos, colocar entre parenteses
        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e =>{
                console.log(btn.className.baseVal)
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e =>{
                btn.style.cursor = 'pointer'
            })
        })
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString('pt-BR')
        this.displayTime = this.currentDate.toLocaleTimeString('pt-BR')
    }

    get displayTime(){
        // innerHTML = manipula os arquivos dentro do HTML
        return this._timeEl.innerHTML
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value
    }

    get displayDate(){
        return this._dateEl.innerHTML
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor
    }

    get currentDate(){
        return new Date()
    }
    set currentDate(valor){
        this._currentDate = valor
    }
}