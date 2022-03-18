import ICar from "../Interface/ICar";

class Car implements ICar {
  seats!: number;
  tripComputer!: boolean;
  gps!: boolean;
  airConditioning!: boolean;
}

export default Car;