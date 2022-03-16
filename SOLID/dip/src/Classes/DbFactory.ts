import Mongo from "./Mongo";
import Sqlite from "./Sqlite";
import DataBase from "../DataBase";
import IDataBase from "../Interface/IDataBase";

class DbFactory {
  private static DBType = DataBase.SQLITE;

  create(): IDataBase {
    if (DbFactory.DBType === DataBase.MONGO_DB) {
      return new Mongo;
    } else {
      return new Sqlite;
    }
  }
}

export default new DbFactory()