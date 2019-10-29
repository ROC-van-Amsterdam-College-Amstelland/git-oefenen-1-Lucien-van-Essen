//schrijf hier je Javascript code
//maak hier je variabelen
var tekst = 564;
var tekst2 = 4;
var samen = tekst +tekst2;
//maak hier je condities
//gebruik type of om het type te bepalen
if (typeof(tekst) == "number") {
    document.getElementById("main").style.backgroundColor = "green";
}

if (typeof(samen) == "string") {
    document.getElementById("main").style.backgroundColor = "red";
}

