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

addPara.textContent = "123"
let num1 = 5
let num2 = 5
let operator = "*"

const selectButtons = document.querySelectorAll("button")

selectButtons.forEach( (button) =>{
    button.addEventListener("click", ()=>{
        addPara.textContent += button.textContent.trim()
        if(addPara.textContent.slice(-1) === "="){
            addPara.textContent = operate(operator, num1, num2)
        }
    })
})
