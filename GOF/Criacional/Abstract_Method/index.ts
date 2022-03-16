// Implementação em TS seguindo exemplo do https://refactoring.guru/pt-br/design-patterns/factory-method

import Logistic from "./src/Classes/Logistic";

const logistic = new Logistic()

const trasport = logistic.createTransport();
trasport.deliver();

