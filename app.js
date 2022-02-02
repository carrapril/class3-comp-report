


let hunger=0;
let happiness=0;
let energy=0;

function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`JS-Hunger ${hunger}`;
    document.getElementById("happinessInfo").innerHTML=`JS-Happiness ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`JS-Energy ${energy}`; 
}

function feed(){

    hunger=hunger+10;
    happiness=happiness+10;
    displayInfo(); 
}

function pet(){
    happiness=happiness+20;
    displayInfo();
}

function play(){
    happiness=happiness+10
    energy=energy-10;
    displayInfo();
}



