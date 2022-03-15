// Open-Closed Principle (Princípio Aberto-Fechado)
// Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

// Com a criação da Classe carros e  classe de Motos não é necessario alterar código que já está pronto. 
// Por exemplo cada classe tem seu método startVeichle e que foram extendidos de um local só, funciona também para classes abstratas.

import Car from "./src/Classes/Car";
import Motorcycle from "./src/Classes/Motorcycle";

let veichle;
const type = 0;

if(type === 0) {
  const requestFromAPI = { color: 'Blue', engine: 2, doors: 4, seats: 5}  
  veichle = new Car(requestFromAPI.color, requestFromAPI.engine, requestFromAPI.doors, requestFromAPI.seats);
} else {
  const requestFromAPI = { color: 'Blue', engine: 2}  
  veichle = new Motorcycle(requestFromAPI.color, requestFromAPI.engine);
}

veichle.startVeichle();