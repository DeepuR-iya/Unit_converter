/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitVal = document.getElementById("unit-val")
const convertBtn = document.getElementById("convert-btn");


convertBtn.addEventListener("click", function () {
    lengthConvert()
    volConvert()
    massConvert()
})

function lengthConvert() {
    let feet = unitVal.value * 3.281
    let meter = unitVal.value / 3.281
    const lenSec = document.getElementById("length-sec")
    lenSec.innerHTML = `<p>
        ${unitVal.value} meters = ${feet.toFixed(3)} feet| ${unitVal.value} feet = ${meter.toFixed(3)} meters
        </p>`
}



function volConvert() {
    let gallon = unitVal.value * 0.264
    let liter = unitVal.value / 0.264
    const lenSec = document.getElementById("volume-sec")
    lenSec.innerHTML = `<p>
        ${unitVal.value} liters = ${gallon.toFixed(3)} gallons | ${unitVal.value} gallons = ${liter.toFixed(3)} liters
        </p>`
}



function massConvert() {
    let pounds = unitVal.value * 2.204
    let kilograms = unitVal.value / 2.204
    const lenSec = document.getElementById("mass-sec")
    lenSec.innerHTML = `<p>
        ${unitVal.value} kg's = ${pounds.toFixed(3)} pounds | ${unitVal.value} pounds = ${kilograms.toFixed(3)} kg's
        </p>`
}