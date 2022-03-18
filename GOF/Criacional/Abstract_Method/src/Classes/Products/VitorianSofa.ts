import ISofa from "../../Interface/ISofa";

class VitorianSofa implements ISofa{
  hasPillows(): void {
    console.log("Vitorian Sofa has pillows");
  }
  layDown(): void {
    console.log("Lay down on vitorian Sofa");
  }
}

export default VitorianSofa;