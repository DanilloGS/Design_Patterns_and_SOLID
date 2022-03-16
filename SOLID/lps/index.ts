// Liskov Substitution Principle (Princípio da substituição de Liskov)
// Uma classe derivada deve ser substituível por sua classe base. Objetos podem ser substituídos por seus subtipos sem que isso afete a execução correta do programa.

import TSCredit from "./src/Classes/TSCredit";
import TSDebit from "./src/Classes/TSDebit";

const type = 0

let payment;

if(type === 0) {
    payment = new TSCredit()
} else {
    payment = new TSDebit()
}

// Não importa qual classe está sendo utilizada. Os métodos usados funcionam para todos os filhos sem a necessidade de refatoração.

payment.checkAccountLimit()
payment.validatePayment()
payment.makePayment()