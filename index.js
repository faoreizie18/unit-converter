
let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


function render(unit, convert1, metric, convert2, imperial) {
    
    unit.textContent = 
    `${inputEl.value} ${metric} = ${convert1.toFixed(3)} ${imperial} 
    | ${inputEl.value} ${imperial} = ${convert2.toFixed(3)} ${metric}`
    
}


convertBtn.addEventListener("click", function(){
    
    meterToFeet = inputEl.value * 3.281
    feetToMeter = inputEl.value / 3.281
    render(lengthEl, meterToFeet, "meters", feetToMeter, "feet")
    
    gallonToLiter = inputEl.value * 0.264
    literToGallon = inputEl.value / 0.264
    render(volumeEl, gallonToLiter, "liters", literToGallon, "gallons")
    
    kiloToPound = inputEl.value * 2.204
    poundToKilo = inputEl.value / 2.204
    render(massEl, kiloToPound, "kilos", poundToKilo, "pounds")
    
    inputEl.value = " "
    
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/