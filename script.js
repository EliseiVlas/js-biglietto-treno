// Biglietto del treno
// INPUT
    // prezzo biglietto in base ai km
    const prezzoPerKillometro = 0.21;

    // l'utente inserisce il numero di killometri che vuole percorrere
    const killometriDaPercorrere = parseInt(prompt("Inserisca i killometri che deve percorrere"));
    
    //l'utente inserisce la sua eta
    const etaDelPasseggero = parseInt(prompt("Inserisca la sua eta"));

//ELABORAZIONE
    // calcolo il prezzo del percorso in base al killometraggio
    let prezzoBiglietto = (killometriDaPercorrere*prezzoPerKillometro)
    
        //calcolo da fare nel caso eta inferiore a 18 anni
        let scontoInferiore = (prezzoBiglietto*80/100);
        
        //calcolo da fare nel caso eta superiore a 64 anni
        let scontoSuperiore = (prezzoBiglietto*60/100)
        
    // calcolo lo sconto in base all'eta del passegero
        //SE l'eta del passeggero e inferiore a 18 anni ha uno sconto del 20%
        if (etaDelPasseggero < 18) {
            //sconto del 20%
            prezzo = scontoInferiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 20% e" + " " + prezzo + "€")
            //ALTRIMENTI SE l'eta del passeggero e superiore a 64 anni ha uno sconto del 40%
        }else if(etaDelPasseggero > 64) {
            //sconto del 40%
            prezzo = scontoSuperiore.toFixed(2)
            console.log("Il prezzo da pagare scontato del 40% e" + " " + prezzo + "€")

            //Altrimenti il prezzo rimane non scontato
        }else {
            prezzo = prezzoBiglietto.toFixed(2);
            console.log("Il prezzo da pagare e" + " " + prezzo + "€")
        }
    