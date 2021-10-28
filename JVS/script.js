function DarkM(){

   const element = document.body;
    element.classList.toggle("dark-mode");
}

const light = document.querySelector(".container3");

light.addEventListener("click", () => { document.getElementById("cont3").className = "container3"} ); 


/* numeri da inserire per l'utente* Creare una funzione che chieda all'utente di inserire 2 numeri tramite prompt e che faccia il console.log della somma soltanto dopo 10 secondi. */

const sum = (numOne, numTwo) => numOne + numTwo;


function calculator (operation, numbers) {
    let totOperation = 0;
    totOperation = operation(...numbers);
    return totOperation;
}

const parsedNumbers = [];

let operation = prompt("Inserisci due numeri: ");
if (operationChoice === "sum") {
    calculator(sum, parsedNumbers);
    setTimeout(calculator, 5000);
} 
console.log (sum);




/*circle story*/

let time = 0;

    function changeColor() {
    let circle = document.getElementById("circle");
    let color = ["green", "red", "yellow"];
    circle.style.backgroundColor = color[time];
    time = (time + 1) % color.length;
} 

  const change = setInterval(changeColor, [3000]);

  document.addEventListener ("keypress", (Invio) => {
      if (Invio.key === "Enter") {
          clearInterval (change);
        time = null; 
      }
  })