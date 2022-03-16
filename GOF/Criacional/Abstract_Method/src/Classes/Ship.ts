import ITransport from "../Interface/ITransport";

class Ship implements ITransport {
	deliver(): void {
		console.log("Navio saiu para entrega");
	}
}

export default Ship