# som-getallen-functies
toont een functie aan die de som van even getallen in een array berekent (javascript)

- deze eenvoudige functie toont de basis van het werken met function en arrays in JavaScript.
  De functie berekent de som van alle even getallen in een array.
  
-code-

  function somEven(arr){
    let som = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            som += arr[i]
        }
    } 
    return som
}
let getallen = [7, 14, 20, 5, 9, 12]
console.log(somEven(getallen))

Hier maken we een function somEven die een array als parameter krijgt.
We starten de som op 0, dan een met een for-loop lopen we over elke element van de array.
met ' % 2 == 0' controleren we of het getal even is en tellen we het op.
op het einde geven we de totale som terug met 'return'
Ten slotte roepen we de functie aan en tonen het resultaat met console.log
