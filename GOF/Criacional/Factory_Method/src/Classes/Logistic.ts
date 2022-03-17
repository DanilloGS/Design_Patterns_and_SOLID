import ITransport from "../Interface/ITransport";

abstract class Logistic{

  protected abstract planDelivery(): ITransport;

  public createTransport(): void {
    const transport = this.planDelivery();
    console.log("Fabrica: ", transport.deliver());
  }

}

export default Logistic;