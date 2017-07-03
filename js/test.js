var funcCounter = 0;

function validateInput() {
    var x;

    x = document.getElementById("sensInput").value;

    if (x == "" || x <= 0) {
        return false;
    } else {
        if (funcCounter == 1) {
            return false;
        } else {
            funcCounter = 1;
            initialCalc();
            
        }
    }
}

function initialCalc() {

    originalSens = document.getElementById("sensInput").value;

    newLowSens = originalSens * .5;
    lowSensButton = document.createElement("BUTTON");             //Create Button

    lowSensButtonText = document.createTextNode(newLowSens);        // Text = new sens
    lowSensButton.appendChild(lowSensButtonText);                       //  Add text to button
    document.getElementById("buttonSpot").appendChild(lowSensButton); // ADD Button to div 
    lowSensButton.onclick = divideCalcButtton1;

    newHighSens = originalSens * 1.5;
    highSensButton = document.createElement("BUTTON");             //Create Button

    highSensButtonText = document.createTextNode(newHighSens);        // Text = new sens
    highSensButton.appendChild(highSensButtonText);                       //  Add text to button
    document.getElementById("buttonSpot").appendChild(highSensButton); // ADD Button to div 
    highSensButton.onclick = divideCalcButtton2; 
}


function divideCalcButtton1() {
    newLowSens = (parseFloat(originalSens) + parseFloat(newLowSens)) / 2;
    
    multiplyCalcButton1();
}   

function multiplyCalcButton1() {
    newLowSens = parseFloat(newLowSens) * .5;
    updateButton1();
}

function updateButton1() {
    lowSensButtonText = document.createTextNode(newLowSens);
    lowSensButton.appendChild(lowSensButtonText);
    //alert(newLowSens);
}



function divideCalcButtton2() {
    newHighSens = (parseFloat(originalSens) + parseFloat(newHighSens)) / 2;
    alert(newHighSens);
    multiplyCalcButton2();
}

function multiplyCalcButton2() {
    newHighSens = parseFloat(newHighSens) * 1.5;
    updateButton2();
}

function updateButton2() {
    highSensButtonText = document.createTextNode(newHighSens);
    highSensButton.appendChild(highSensButtonText);
    //alert(newHighSens);
}