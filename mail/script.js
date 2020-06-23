var mail = ["michaelcinus@gmail.com", "michaelcinus@hotmail.com", "michaelcinus@live.com" ]
var mailUtente = prompt("inserisci la tua email");
var msg = 0;

console.log(mailUtente);


for (var i = 0; i < mail.length; i++){
    if (mailUtente == mail[i]) {
        msg = msg + 1; 
    } else {

    }
}

if ( msg > 0 ){
    console.log("mail inserita corretta");
} else {
    console.log("mail inserita erratta");
}