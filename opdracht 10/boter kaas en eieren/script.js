/*Pseudo-code
Boter Kaas en Eieren

Klik op een grijs vlak
Het eerste vak dat wordt geklikt laat het teken 0 zien
Klik op een ander grijs vlak
Het vak daarna dat wordt geklikt laat het teken X zien
Klik op een ander grijs vlak…
Enzovoort tot alle vlakken vol zitten met een teken

Er op een vak wordt geklikt met een teken verandert deze niet 

Bij deze stopt het spel:
Gelijkspel als er geen drie de zelfde tekens op een lijn zitten en alle vakken vol zitten met een plaatje of Drie de zelfde tekens op een lijn
-	Horizontaal
-	Verticaal
-	Diagonaal
Na de gelijkspel verandert er niks
Na ‘drie op een rij’ verandert de achtergrond van het winnende teken in groen.

Er op de knop opnieuw spelen wordt geklikt dan veranderen alle vakken naar standaard grijs en kan er weer op geklikt worden.
*/
function opnieuw(){
    document.getElementbyID("linksBoven").style.backgroundColor= "grey";
    document.getElementbyID("middenBoven").style.backgroundColor= "lightgrey";
    document.getElementbyID("rechtsBoven").style.backgroundColor= "lightgrey";
    document.getElementbyID("linksMidden").style.backgroundColor= "lightgrey";
    document.getElementbyID("midden").style.backgroundColor= "lightgrey";
    document.getElementbyID("rechtsMidden").style.backgroundColor= "lightgrey";
    document.getElementbyID("linksOnder").style.backgroundColor= "lightgrey";
    document.getElementbyID("middenOnder").style.backgroundColor= "lightgrey";
    document.getElementbyID("rechtsOnder").style.backgroundColor= "lightgrey";
}

function linksBovenKlik(){
    document.getElementbyID("linksBoven").scr= "x.png";
}