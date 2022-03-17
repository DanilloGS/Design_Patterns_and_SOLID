import ITransport from "../Interface/ITransport";
import Logistic from "./Logistic";
import Truck from "./Truck";

class RoadLogistic extends Logistic {
  
  public planDelivery(): ITransport {
      return new Truck();
  }

}

export default RoadLogistic;