import IChair from "../Interface/IChair";
import IFurniture from "../Interface/IFurniture";
import ISofa from "../Interface/ISofa";
import ModernChair from "./Products/ModernChair";
import ModernSofa from "./Products/ModernSofa";

class ModernFurniture implements IFurniture {
  createChair(): IChair {
    return new ModernChair()
  }
  createSofa(): ISofa {
    return new ModernSofa()
  }

}

export default ModernFurniture;