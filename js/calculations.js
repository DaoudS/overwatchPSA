function initialCalc() {
    var originalSens = document.getElementById("SensValue1").value;

    var newSensL = originalSens * .5;
    var sensButton1 = document.createElement("BUTTON");
    var sensButton1text = document.createTextNode(newSensL);
    sensButton1.appendChild(sensButton1text);
    document.body.appendChild(sensButton1);

    var newSensH = originalSens * 1.5;
    var sensButton2 = document.createElement("BUTTON");
    var sensButton2text = document.createTextNode(newSensH);
    sensButton2.appendChild(sensButton2text);
    document.body.appendChild(sensButton2);  

}

function secondCalc() {
    var newSensL = newSensL * .5;
    sensButton1text.nodeValue = newSensL;
} 