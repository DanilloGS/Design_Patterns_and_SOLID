// Implementação em TS seguindo exemplo do https://refactoring.guru/pt-br/design-patterns/builder

import CarBuilder from "./src/Classes/CarBuilder";
import CarManualBuilder from "./src/Classes/CarManualBuilder";
import Director from "./src/Classes/Director";
import IBuilder from "./src/Interface/IBuilder";

const client = (director: Director, builder: IBuilder, type: number) => {
  director.setBuilder(builder);
  
  if(type === 0) director.createDefaultCar();
  else if(type === 1) director.createIntermediary();
  else director.createBestSpecs();

  return director.getProduct();
}

const director = new Director();
const carBuilder = new CarBuilder();
const carManualBuilder = new CarManualBuilder();
const carType = 2

const carProduct = client(director, carBuilder, carType);
const carManualProduct = client(director, carManualBuilder, carType);

console.log("\n",JSON.stringify(carProduct));
console.log("\n",JSON.stringify(carManualProduct));