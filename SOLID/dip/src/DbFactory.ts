import Mongo from "./Classes/Mongo";
import Sqlite from "./Classes/Sqlite";
import DataBase from "./DataBase";

class DbFactory {
  private static DBType = DataBase.MONGO_DB;

  startDB(): void {
    switch (DbFactory.DBType) {
      case DataBase.MONGO_DB:
        Mongo.startDB();
        break;
      case DataBase.SQLITE:
        Sqlite.startDB();
        break;
      default:
        break;
    }
  }

  switchDB(): void {
    if(DbFactory.DBType === DataBase.MONGO_DB) {
      DbFactory.DBType = DataBase.SQLITE;
    } else {
      DbFactory.DBType = DataBase.MONGO_DB;
    }
    console.log("DB Atual: " + DbFactory.DBType);
  }
}

export default new DbFactory()