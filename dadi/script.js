var btnTira = document.getElementById("tira");

//BTN TIRA
btnTira.addEventListener("click", function(){
    var numComputer = Math.floor(Math.random() * 6) + 1 ;
    var numUtente = Math.floor(Math.random() * 6) + 1;

    console.log(numComputer , numUtente);
    

    if (numComputer > numUtente){
        console.log("Mi dispiace! Ha vinto il Computer");
    } else if (numUtente > numComputer){
        console.log("Complimenti! Hai vinto");
    } else {
        console.log("PAREGGIO");
    }

});