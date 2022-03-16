import IDataBase from "../Interface/IDataBase";

class Sqlite implements IDataBase {
  getById(id:number): void {
    console.log("Sqlite -> Pegando produto: "+ id);    
  }
  startDB(): void {
    console.log("Ligando Sqlite");    
  }
}

export default Sqlite;