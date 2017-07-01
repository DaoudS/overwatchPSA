function validateInput(){
    var x = document.getElementById("SensValue1").value;

    if (x == "" || x <= 0) {
        return false;
    } else {
        initialCalc();
    }
}

function initialCalc() {
    var originalSens = document.getElementById("SensValue1").value;

    var newSensL = originalSens * .5;
    var sensButton1 = document.createElement("BUTTON");
    var sensButton1text = document.createTextNode(newSensL);
    sensButton1.appendChild(sensButton1text);
    document.getElementById("buttonSpot").appendChild(sensButton1);

    var newSensH = originalSens * 1.5;
    var sensButton2 = document.createElement("BUTTON");
    var sensButton2text = document.createTextNode(newSensH);
    sensButton2.appendChild(sensButton2text);
    document.getElementById("buttonSpot").appendChild(sensButton2);  

}

function calcButtton1() {
    var newSensL = newSensL * .5;
    sensButton1text.nodeValue = newSensL;
} 