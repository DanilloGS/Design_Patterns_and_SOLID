import IVeichle from "./IVeichle";

interface Car extends IVeichle {
  openLuggage: () => void;
  openDoors: () => void;
  wheelsCalibrator: () => void;
}

export default Car