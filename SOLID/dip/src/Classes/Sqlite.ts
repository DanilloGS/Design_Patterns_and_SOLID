import IDataBase from "../Interface/IDataBase";

class Sqlite implements IDataBase {
  startDB(): void {
    console.log("Ligando Sqlite");    
  }
}

export default new Sqlite();