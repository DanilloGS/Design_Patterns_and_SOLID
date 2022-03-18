import ICarManual from "../Interface/ICarManual";

class CarManual implements ICarManual {
  documentTotalSeats!: number;
  documentTripComputer!: boolean;
  documentGps!: boolean;
  documentAirConditioning!: boolean;
}

export default CarManual;