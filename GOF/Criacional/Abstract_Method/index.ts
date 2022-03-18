// Implementação em TS seguindo exemplo do https://refactoring.guru/pt-br/design-patterns/abstract-factory

import Vitorian from "./src/Classes/Vitorian";
import Modern from "./src/Classes/Modern";
import IFurniture from "./src/Interface/IFurniture";

const client = (forniture: IFurniture) => {
  const chair = forniture.createChair()
  const sofa = forniture.createSofa()

  chair.hasLegs();
  chair.sitOn();

  sofa.hasPillows();
  sofa.layDown();
}

const vitorian = new Vitorian();
const modern = new Modern();

client(vitorian);
client(modern);