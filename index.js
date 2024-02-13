/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// To Do:
// [X] Refactor calculations into one function
// [X] Remove unwanted comments

const input = document.getElementById("app-input");
const themeBtn = document.getElementById("toggle-theme");
const convertBtn = document.getElementById("convert-btn");
const lengthDisplay = document.getElementById("length-display");
const volumeDisplay = document.getElementById("volume-display");
const massDisplay = document.getElementById("mass-display");

function calculateResult(inputValue, unitType) {
    let result = 0;
    
    switch(unitType) {
        case 'feet':
            result = inputValue * 3.28084;
            break;
        case 'meters':
            result = inputValue * 0.3048;
            break;
        case 'gallons':
            result = inputValue * 0.264;
            break;
        case 'liters':
            result = inputValue * 3.78541;
            break;
        case 'pounds':
            result = inputValue * 2.20462;
            break;
        case 'kilos':
            result = inputValue * 0.453592;
            break;
        default:
            console.log("Invalid unit type!");
            break;
    }
    return result.toFixed(3);
}


function calculateMeasurments(){
    calculateResult(input.value, 'meters');
    calculateResult(input.value, 'feet');
    calculateResult(input.value, 'gallons');
    calculateResult(input.value, 'liters');
    calculateResult(input.value, 'pounds');
    calculateResult(input.value, 'kilos');
}


function appSetup(){
    input.value = 20;
    calculateMeasurments();
    render();
    
    if(!localStorage.getItem("theme")){
        localStorage.setItem("theme", "light");
    }
}



function render(){
    calculateMeasurments();
    lengthDisplay.textContent = `${input.value} meters = ${calculateResult(input.value, 'feet')} feet | ${input.value} feet = ${calculateResult(input.value, 'meters')} meters`;
    volumeDisplay.textContent = `${input.value} liters = ${calculateResult(input.value, 'gallons')} gallons | ${input.value} gallons = ${calculateResult(input.value, 'liters')} liters`;
    massDisplay.textContent = `${input.value} kilos = ${calculateResult(input.value, 'pounds')} pounds | ${input.value} pounds = ${calculateResult(input.value, 'kilos')} kilos`;
}


// Convert Button Listener
convertBtn.addEventListener("click", function(){
    render();
})


// Theme Toggle Section ----------------------------------------------------------------------
let resultSection = document.getElementById("result-section");
let resultWrapper = document.getElementsByClassName("result-wrapper");
let resultTitle = document.getElementsByClassName("result-title");
let resultDescription = document.getElementsByClassName("result-description");

function toggleTheme(){
    if(localStorage.getItem("theme") === "light"){
        localStorage.setItem("theme", "dark");
        
        resultSection.style.background = "#1F2937";
        
        for(let i = 0; i < resultWrapper.length; i++){
            resultWrapper[i].style.background = "#273549";
        }
        
        for(let i = 0; i < resultTitle.length; i++){
            resultTitle[i].style.color = "#CCC1FF";
        }
        
        for(let i = 0; i < resultDescription.length; i++){
            resultDescription[i].style.color = "#fff";
        }
    }
    else if(localStorage.getItem("theme") === "dark"){
        localStorage.setItem("theme", "light");
        
        resultSection.style.background = "#F4F4F4";
        
        for(let i = 0; i < resultWrapper.length; i++){
            resultWrapper[i].style.background = "#fff";
        }
        
        for(let i = 0; i < resultTitle.length; i++){
            resultTitle[i].style.color = "#5A537B";
        }
        
        for(let i = 0; i < resultDescription.length; i++){
            resultDescription[i].style.color = "#353535";
        }
    }
}

themeBtn.addEventListener("click", function(){
    toggleTheme();
})