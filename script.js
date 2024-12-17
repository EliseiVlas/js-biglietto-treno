// Biglietto del treno

// INPUT
    // prezzo biglietto in base ai km

    let prezzoPerKillometro = 0.21;

    // l'utente inserisce il numero di killometri che vuole percorrere
    let killometriDaPercorrere = prompt("Inserisca i killometri che deve percorrere");

    //l'utente inserisce la sua eta
    let etaDelPasseggero = prompt("Inserisca la sua eta") 


    console.log(prezzoPerKillometro, killometriDaPercorrere, etaDelPasseggero);
//ELABORAZIONE
    // calcolo il prezzo del percorso in base al killometraggio
    let prezzoBiglietto = (killometriDaPercorrere*prezzoPerKillometro)
    console.log(prezzoBiglietto)

        //calcolo da fare nel caso eta inferiore a 18 anni
        let scontoInferiore = (prezzoBiglietto*80/100);
        

        //calcolo da fare nel caso eta superiore a 64 anni
        let scontoSuperiore = (prezzoBiglietto*60/100)
        
    
    // calcolo lo sconto in base all'eta del passegero
        //SE l'eta del passeggero e inferiore a 18 anni ha uno sconto del 20%
        if (etaDelPasseggero < 18) {
            //sconto del 20%
            prezzo = scontoInferiore
            //ALTRIMENTI SE l'eta del passeggero e superiore a 64 anni ha uno sconto del 40%
        }else if(etaDelPasseggero > 64) {
            //sconto del 40%
            prezzo = scontoSuperiore
            //Altrimenti il prezzo rimane non scontato
        }else {
            prezzo = prezzoBiglietto
        }

//OUTPUT
    // prezzo finale 
    console.log("Il prezzo da pagare e" + " " + prezzo + "€")