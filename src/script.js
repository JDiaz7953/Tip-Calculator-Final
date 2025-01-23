const buttonAction = document.querySelectorAll("button")
const billAmount = document.querySelector(".bill-value")
const peopleAmount = document.querySelector(".people-value")
const tipDisplayValue = document.querySelector(".display-tip")

//console.log(buttonAction)
console.log(billAmount)

buttonAction.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.value === "Reset") {
            billAmount.value= " ";
            billAmount.placeholder= "0";
        }

        let tipAmount = billAmount.value * (button.value /100) || 0
        tipDisplayValue.textContent = `$${ tipAmount.toFixed(2)}`
     })
})
