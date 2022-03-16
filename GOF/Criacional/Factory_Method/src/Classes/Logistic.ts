import DeliverType from "../DeliverType";
import ILogistic from "../Interface/ILogistic";
import ITransport from "../Interface/ITransport";
import Ship from "./Ship";
import Truck from "./Truck";

class Logistic implements ILogistic{

    private static deliverType = DeliverType.TRUCK;

    planDelivery(): void {
        console.log("Planejar nova entrega");
    }

    createTransport(): ITransport {
        this.planDelivery();
        if(Logistic.deliverType === DeliverType.SHIP) return new Ship();
        else return new Truck();
    }
    

}

export default Logistic;