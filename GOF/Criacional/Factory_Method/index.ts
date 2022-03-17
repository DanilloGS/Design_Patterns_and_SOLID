// Implementação em TS seguindo exemplo do https://refactoring.guru/pt-br/design-patterns/factory-method

import Logistic from "./src/Classes/Logistic";
import RoadLogistic from "./src/Classes/RoadLogistic";
import SeaLogistic from "./src/Classes/SeaLogistic";

const seaLogistic = new SeaLogistic()
const roadLogistic = new RoadLogistic()

const client = (logistic: Logistic) => {
  logistic.createTransport()
}

client(seaLogistic)
client(roadLogistic)
