import IBuilder from "../Interface/IBuilder";

class Director {
  private builder!: IBuilder;

  setBuilder(builder: IBuilder){
    this.builder = builder
  }

  createDefaultCar(): void {
    this.builder.setSeats(5);
    this.builder.setAirConditioning();
  }

  createIntermediary(): void {
    this.createDefaultCar();
    this.builder.setGPS();
  }  

  createBestSpecs(): void {
    this.createIntermediary();
    this.builder.setTripComputer();
  }  

  getProduct() {
    return this.builder;
  }
  
}

export default Director;