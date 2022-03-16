import IDataBase from "../Interface/IDataBase";

class Mongo implements IDataBase {
  getById(id:number): void {
    console.log("Mongo -> Pegando produto: "+ id);    
  }
  startDB(): void {
    console.log("Ligando Mongo");    
  }
}

export default Mongo;