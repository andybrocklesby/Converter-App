/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Elements
const input = document.getElementById("app-input");
const themeBtn = document.getElementById("toggle-theme");
const convertBtn = document.getElementById("convert-btn");
const lengthDisplay = document.getElementById("length-display");
const volumeDisplay = document.getElementById("volume-display");
const massDisplay = document.getElementById("mass-display");

// Initializing Numbers
let feet = 0;
let meters = 0;
let gallons = 0;
let liters = 0;
let pounds = 0;
let kilos = 0;

// Calculations
function calulateMeters(){
    feet = input.value * 3.28084;
    feet = feet.toFixed(3)
    return feet;
}

function calculateFeet(){
    meters = input.value * 0.3048;
    meters = meters.toFixed(3);
    return meters;
}

function calculateGallons(){
    gallons = input.value * 0.264;
    gallons = gallons.toFixed(3);
    return gallons;
}

function calculateLiters(){
    liters = input.value * 3.78541;
    liters = liters.toFixed(3);
    return liters;
}

function calculateKilos(){
    kilos = input.value * 0.453592;
    kilos = kilos.toFixed(3);
}

function calculatePounds(){
    pounds = input.value * 2.20462;
    pounds = pounds.toFixed(3);
    return pounds;
}

// Combining calculations into one call
function calculateMeasurments(){
    calulateMeters();
    calculateFeet();
    calculateGallons();
    calculateLiters();
    calculatePounds();
    calculateKilos();
}

// Setting up initial values on load
function appSetup(){
    input.value = 20;
    calculateMeasurments();
    render();
    
    if(!localStorage.getItem("theme")){
        localStorage.setItem("theme", "light");
    }
}

// Updating values
function render(){
    calculateMeasurments();
    lengthDisplay.textContent = `${input.value} meters = ${feet} feet | ${input.value} feet = ${meters} meters`;
    volumeDisplay.textContent = `${input.value} liters = ${gallons} gallons | ${input.value} gallons = ${liters} liters`;
    massDisplay.textContent = `${input.value} kilos = ${pounds} pounds | ${input.value} pounds = ${kilos} kilos`;
}

// Convert Button Listener
convertBtn.addEventListener("click", function(){
    render();
})

// Theme Toggle Section
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

// Theme Button Listener
themeBtn.addEventListener("click", function(){
    toggleTheme();
})