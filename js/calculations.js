var setupDone = 0;

function validateInput() {
    var sensIn;

    sensIn = document.getElementById("sensInput").value;

    if (isNaN(sensIn) || sensIn == "" || sensIn <= 0) {
        return false;
    } else {
        if (setupDone == 1){
        } else {
            setup();
        }
    }
}

function setup() {

    originalSens = document.getElementById("sensInput").value;
    buttonOneClicked = false;
    buttonTwoClicked = false;

    lowSens = originalSens * .5;
    highSens = originalSens * 1.5;
resetButton = document.createElement("BUTTON");
    buttonOne = document.createElement("BUTTON");
    buttonTwo = document.createElement("BUTTON");
   

    buttonOneText = document.createTextNode(lowSens);
    buttonTwoText = document.createTextNode(highSens);
    resetButtonText = document.createTextNode("Reset");

    buttonOne.appendChild(buttonOneText);
    buttonTwo.appendChild(buttonTwoText);
    resetButton.appendChild(resetButtonText);

    resetButton.className = "btn btn-secondary active";

    document.getElementById("buttonSpot").appendChild(buttonOne);
    document.getElementById("buttonSpot").appendChild(buttonTwo);

    if (setupDone == 0){
        document.getElementById("inputGroup1").appendChild(resetButton);
        resetButton.onclick = reset;    
    }
    else
    {

    }
    setupDone = 1;    
    onClickCheck();    
}

function onClickCheck() {
    loopCounter = 0;
    buttonOne.onclick = buttonOneClickCheck;
    buttonTwo.onclick = buttonTwoClickCheck; 
}
function buttonOneClickCheck() {
    if (loopCounter < 5){
        if (buttonTwoClicked == true){
            return false;
        } else {
            buttonOneClicked = true;
            buttonCheck();
            buttonOneClicked = false;
        }        
    } else {
        prefferedSens = lowSens;
        displayFinal();
    }
}

function buttonTwoClickCheck() {
    if (loopCounter < 5){
        if (buttonOneClicked == true) {
            return false;
        } else {
            buttonTwoClicked = true;
            buttonCheck();
            buttonTwoClicked = false;
        }   
    } else {
        prefferedSens = highSens;
        displayFinal();
    }
}

function buttonCheck() {
    if (buttonOneClicked == true) {
        prefferedSens = lowSens;
        divideSplit();

    } else if (buttonTwoClicked == true) {
        prefferedSens = highSens;
        divideSplit();
    }
}

function divideSplit() {
    if (loopCounter <= 2) {
        newSens = (parseFloat(prefferedSens) + parseFloat(originalSens)) / 2;    
    }   else {
        newSens = prefferedSens;
    }
    newSens = Math.round(newSens * 100) / 100;
    //console.log("New Sens:"+ newSens + " From: " + prefferedSens + " + " + originalSens + "/ 2");
    originalSens = newSens;
    multiplySplit();
}

function multiplySplit() {
    if (loopCounter < 1){
        lowSens = newSens * .5;
        highSens = newSens * .6;       
    }
    lowMod = (loopCounter * .1) + .5;
    highMod = (loopCounter * -.1) + 1.5;
    lowSens = newSens * lowMod;
    highSens = newSens * highMod;
    loopCounter = loopCounter + 1;
    
    updateButton();
}

function updateButton() {
    buttonOneText.nodeValue = Math.round(lowSens * 100) / 100;;
    buttonTwoText.nodeValue = Math.round(highSens * 100) / 100;;
}

function displayFinal(){
    document.getElementById("sensFinal").innerHTML ="Your perfect sensitivty is: " + Math.round(prefferedSens * 100) / 100;
}

function reset(){
    document.getElementById("sensFinal").innerHTML = "";
    document.getElementById("buttonSpot").innerHTML = "";
    document.getElementById("inputGroup1").innerHTML = "";
    setupDone = 0;
}