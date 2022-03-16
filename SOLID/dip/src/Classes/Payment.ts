import DbFactory from "./DbFactory";

// Toda e qualquer mudança no código irá ocorrer somente no DbFactory. 
// Mudança em código de Baixo nível não afetará o alto nível do código

class Payment {
    pay(id: number) {
      const database = DbFactory.create();
      database.getById(id);
      console.log("Pagamento realiazado");
    }
}

export default new Payment();