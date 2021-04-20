var minNumber = 1;
var maxNumber = 100;
var aiNumbersLenght = 16;


var aiNumbers = [];
var userNumbers = {};

//chiede all'utente di inserire un numero tramite prompt x volte, dove x è la differenza tra
//il valore "maxNumber" e "aiNunmbersLength"
//controllare che il numero inserito sia valido e che non sia ancora stato usato 
// e che non sia minore di minNumber o maggiore di maxNumber
//deve anche controllare che il numero non esista all'interno dell'array "aiNunmbers"
    function askUserNumbers() {
        var userLenghtMax = (maxNumber - minNumber) - aiNumbersLenght;
    
        var gameOver = false;
    //finchè la length dei numeri inseriti è minore della length massima dei numeri che l'utente può inserire
    //continuo a chidere all'utente di inserire un numero tramite prompt
        while (userNumbers.length <= userLenghtMax && !gameOver) {
            
            var userInput = prompt("inserisci un numero tra" + minNumber + "e" + maxNumber + ".") (+userNumbers.length );

            if (userInput == null) {
                gameOver = true;
            }

            if(userNumbers.length === userLenghtMax) {
                gameOver = true;
                alert("YOU WIN");
            }   

            // se il valore inserito è valido ritorna TRUE 
            // se il valore non è valido ritorna FALSE
            // se non è valido l'utente deve reinserirlo
            // se il valore non è valido perchè è una MINA ritora "game over"
            var inputIsValid = checkUserInput(userInput) 


                if(!inputIsValid && inputIsValid !== "game over") {
                    alert ("numero inserito non valido.")

                } else if (inputIsValid === "game over") {
                    gameOver = true
                    alert ("HAI PERSO DOPO AVER INSERITO" + userNumbers.length + "numeri.");

                } else {
                    userNumbers.push(parseInt(userInput));

                    console.log (userNumbers);
                }
            }
        }

    //deve controllare: 
    //il valore è un numero reale
    // il numero non è minore di minNumber
    // il numero non è maggiore di maxNumber
    // il numero non sia già stato usato dall'utente
    function checkUserInput(inputValue) {
        var result = true
        var numberToCheck = parseInt(inputValue)

        if (isNaN(numberToCheck)) {
            return false;
        }

        if (numberToCheck < minNumber || numberToCheck > maxNumber) {
            return false;
        }
        if (userNumbers.indexOf(numberToCheck) > -1) {
            return false;
        }
        
        if (aiNumbers.indexOf(numberToCheck) > -1) {
            return "game over"
        }

        return result
    }



    for (var i = 0; i < userLenghtMax; i++) {
        
        if(numeroIsDoppio) {
            i--
            alert("numero non valido")
        } else {
        }
    }
    prompt("inserisci un numero da 1 a 100")


//crea i numeri iniziali del computer
//si assicura che i numeri non siano doppioni
function createAiNumbers() {
    do {
        var numeroRandom = generateRandomNumber(1,100);
        if(aiNumbers.indexOf(numeroRandom) === -1) {
            aiNumbers.push(numeroRandom)
        }
    } while (aiNumbers.length < aiNunmbersLenght) 
        console.log(aiNumbers);
    }

//funzione che genera numeri random da 1 a 100 passati come argomento
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
    createAiNumbers();
    askUserNumbers();
})()



