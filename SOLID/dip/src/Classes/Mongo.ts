import IDataBase from "../Interface/IDataBase";

class Mongo implements IDataBase {
  shutDown(): void {
    console.log("Desligando Mongo");    
  }
  startDB(): void {
    console.log("Ligando Mongo");    
  }
}

export default new Mongo();