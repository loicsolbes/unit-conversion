/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthRate = 3.281
const volumeRate = 0.264
const massRate = 2.204

const numToCovert = document.getElementById("input-el")
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')
const convertBtn = document.getElementById('convert-btn')

// function meterToFeet(){
//     let numConverted = Math.round( (numToCovert.value*3.281) * 1000 ) / 1000
//     lengthEl.textContent = `${numToCovert.value} meters = ${numConverted} feet`
// }
// function literToGallon() {
//     let numConverted =  Math.round( (numToCovert.value*0.264) * 1000 ) / 1000
//     volumeEl.textContent = `${numToCovert.value} liters = ${numConverted} gallons`
// }

// function kilogramToPound() {
//     let numConverted = Math.round( (numToCovert.value*2.204) * 1000 ) / 1000
//     massEl.textContent = `${numToCovert.value} kilos = ${numConverted} pounds`
// }

function  converter(element, rate, metricUnit, imperialUnit) {
    let numConvertedMetricToImperial = Math.round( (numToCovert.value*rate) * 1000 ) / 1000
    let numConvertedImperialToMetric = Math.round( (numToCovert.value/rate) * 1000 ) / 1000
    
    element.textContent = `${numToCovert.value} ${metricUnit} = ${numConvertedMetricToImperial} ${imperialUnit} | ${numToCovert.value} ${imperialUnit} = ${numConvertedImperialToMetric} ${metricUnit}`

}


convertBtn.addEventListener("click", () => {
    // meterToFeet()
    // literToGallon()
    // kilogramToPound()
    converter(lengthEl, lengthRate, "meters", "feet")
    converter(volumeEl, volumeRate, "liters", "gallons")
    converter(massEl, massRate, "kilos", "pounds")


   
})

