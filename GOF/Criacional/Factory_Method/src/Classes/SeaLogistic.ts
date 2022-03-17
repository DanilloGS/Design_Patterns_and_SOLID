import ITransport from "../Interface/ITransport";
import Logistic from "./Logistic";
import Ship from "./Ship";

class SeaLogistic extends Logistic {
  public planDelivery(): ITransport {
      return new Ship();
  }
}

export default SeaLogistic;