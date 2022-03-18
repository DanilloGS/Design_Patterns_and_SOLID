import ISofa from "../../Interface/ISofa";

class ModernSofa implements ISofa{
  hasPillows(): void {
    console.log("Modern Sofa has pillows");
  }
  layDown(): void {
    console.log("Lay down on Modern Sofa");
  }
}

export default ModernSofa;