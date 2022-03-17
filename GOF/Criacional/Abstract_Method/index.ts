// Implementação em TS seguindo exemplo do https://refactoring.guru/pt-br/design-patterns/abstract-factory

import ModernForniture from "./src/Classes/ModernForniture";
import VitorianForniture from "./src/Classes/VitorianForniture";
import FornitureType from "./src/FornitureType";
import IFurniture from "./src/Interface/IFurniture";

const client = (forniture: IFurniture, type = FornitureType.COFFE_TABLE) => {
  if (type === FornitureType.CHAIR) {
    forniture.createChair()
  } else if (type === FornitureType.SOFA) {
    forniture.createSofa();
  } else {
    forniture.createCoffeTable();
  }
}

const vitorian = new VitorianForniture();
const modern = new ModernForniture();

client(vitorian);
client(modern);