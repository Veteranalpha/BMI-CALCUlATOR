'use strict';
const calcButton = document.getElementById('calc');



calcButton.addEventListener("click",() => {   
    let heightValue = parseFloat(document.getElementById('height').value);
let weightValue = parseFloat(document.getElementById('weight').value);
let Output = document.getElementById('output'); 
if (heightValue > 0 && weightValue > 0){
    let bmivalue = weightValue / heightValue ** 2;
        Output.innerHTML = `The BMI IS ${bmivalue.toFixed(2)}Kg/m^2`
} else {
    Output.innerHTML = `Enter a valid Number  and try again!`
}

});