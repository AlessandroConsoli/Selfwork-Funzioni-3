// let number = prompt(`Inserisci un numero compreso tra 0 e 9999`);

function contaCifre(number) {
    if (number >= 0 && number < 10) {
        alert(`il numero scelto è composto da una cifra`);    
    }else if (number >= 10 && number < 100) {
        alert(`il numero scelto è composto da due cifre`);
    }else if (number >= 100 && number < 1000) {
        alert(`il numero scelto è composto da tre cifre`);
    }else if (number >= 1000 && number <= 9999) {
        alert(`il numero scelto è composto da quattro cifre`);
    }else{
        alert(`Attenzione! hai inserito un valore troppo grande oppure inferiore a "0"`);
        
    }
}

contaCifre(prompt(`Inserisci un numero compreso tra 0 e 9999`));



//                             Appunto per il Q&A di Mercoledì
// vorrei ciclare ed inserire il controllo sul tipo di dato in modo che se l'utente inserisce una stringa venga restituito valore non valido