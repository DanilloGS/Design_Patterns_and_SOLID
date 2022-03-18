import IChair from "../Interface/IChair";
import IFurniture from "../Interface/IFurniture";
import ISofa from "../Interface/ISofa";
import VitorianChair from "./Products/VitorianChair";
import VitorianSofa from "./Products/VitorianSofa";

class VitorianFurniture implements IFurniture {
  createChair(): IChair {
    return new VitorianChair()
  }
  createSofa(): ISofa {
    return new VitorianSofa()
  }

}

export default VitorianFurniture;