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

    buttonOne = document.createElement("BUTTON");
    buttonTwo = document.createElement("BUTTON");

    buttonOneText = document.createTextNode(lowSens);
    buttonTwoText = document.createTextNode(highSens);

    buttonOne.appendChild(buttonOneText);
    buttonTwo.appendChild(buttonTwoText);

    document.getElementById("buttonSpot").appendChild(buttonOne);
    document.getElementById("buttonSpot").appendChild(buttonTwo);

    onClickCheck();
    
}

function onClickCheck() {
    loopCounter = 0;
    buttonOne.onclick = buttonOneClickCheck;
    buttonTwo.onclick = buttonTwoClickCheck; 
}
function buttonOneClickCheck() {
    if (buttonTwoClicked == true){
        return false;
    } else {
        buttonOneClicked = true;
        buttonCheck();
        buttonOneClicked = false;
    }
}

function buttonTwoClickCheck() {
    if (buttonOneClicked == true) {
        return false;
    } else {
        buttonTwoClicked = true;
        buttonCheck();
        buttonTwoClicked = false;
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
    newSens = Math.round(newSens+'e2')+'e-2';
    console.log("New Sens:"+ newSens + " From: " + prefferedSens + " + " + originalSens + "/ 2");
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
    buttonOneText.nodeValue = lowSens;
    buttonTwoText.nodeValue = highSens;
}