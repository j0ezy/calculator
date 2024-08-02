function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    num1 = Number(num1)
    num2 = Number(num2)
    if(operator === "+"){
        return add(num1, num2)
    }else if(operator === "-"){
        return subtract(num1, num2)
    }else if(operator === "*"){
        return multiply(num1, num2)
    }else if(operator === "/"){
        return divide(num1, num2)
    }
}

const selectDisplay = document.querySelector(".display")
const addPara = document.createElement("p")
selectDisplay.appendChild(addPara)

addPara.textContent = ""
let num1 = null
let num2 = null
let operator = null
let index = null

const selectNumbers = document.querySelectorAll(".number")
const selectOperators = document.querySelectorAll(".operator")
const selectClear = document.querySelector(".clear")
const selectEquals = document.querySelector(".equals")

selectClear.addEventListener("click", ()=>{
    addPara.textContent = ""
    num1 = null
    num2 = null
    operator = null
    index = null
})

selectNumbers.forEach( (button) =>{
    button.addEventListener("click", ()=>{
        addPara.textContent += button.textContent.trim()
    })
})

selectOperators.forEach( (button) =>{
    button.addEventListener("click", ()=>{
        if(num1 === null) num1 = addPara.textContent.trim()
        if(operator === null) operator = button.textContent.trim()
        if(index === null) index = addPara.textContent.length + 1
        addPara.textContent += button.textContent.trim()
        selectOperators.forEach((button) => button.setAttribute("disabled", ""))
    })
})

selectEquals.addEventListener("click", ()=>{
    let num2 = addPara.textContent.slice(index).trim()
    addPara.textContent = operate(operator, num1, num2)
    selectOperators.forEach((button) => button.removeAttribute("disabled"))
    num1 = null
    num2 = null
    operator = null
    index = null
})


