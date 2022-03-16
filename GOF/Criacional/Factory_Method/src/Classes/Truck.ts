import ITransport from "../Interface/ITransport";

class Truck implements ITransport {
	deliver(): void {
		console.log("Caminhão saiu para entrega");
	}
}

export default Truck