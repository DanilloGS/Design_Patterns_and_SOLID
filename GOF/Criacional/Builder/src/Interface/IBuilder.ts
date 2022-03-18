interface IBuilder { 
  reset(): void;
  setSeats(seats: number): void;
  setAirConditioning(): void;
  setTripComputer(): void;
  setGPS(): void;
}

export default IBuilder;