var mail = ["michaelcinus@gmail.com", "michaelcinus@hotmail.com", "michaelcinus@live.com" ]
var mailUtente = prompt("inserisci la tua email");

console.log(mailUtente);


for (var i = 0; i < mail.length; i++){
    if (mailUtente == mail[i]) {
        console.log("email inserita corretta"); 
    } else {
        console.log("email inserita erratta");
    }
}