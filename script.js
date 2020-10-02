class Lommeregner {
  constructor(previousOperandTextElementButton, currentOperandTextElementButton){
    this.previousOperandTextElementButton = previousOperandTextElementButton
    this.currentOperandTextElementButton = currentOperandTextElementButton
    this.clear()
  }

  clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined

  }

  delete(){

  }

  appendNumber(number){

  }

  chooseOperation(operation){

  }

  compute(){

  }

  updateDisplay(){
    this.currentOperandTextElementButton.innerText = this.currentOperand
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElementButton = document.querySelector('[data-previous-operand]')
const currentOperandTextElementButton = document.querySelector('[current-operand')

const lommeregner = new Lommeregner (previousOperandTextElementButton, currentOperandTextElementButton)

number.Buttons.forEach(button =>{
  button.addEventListener('click', () =>{
    lommeregner.appendNumber(button.innerText)
    lommeregner.updateDisplay()
  })
})
