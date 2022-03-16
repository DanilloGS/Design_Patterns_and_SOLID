import TSBank from "./TSBank";

class TSDebit extends TSBank{
    
	validatePayment() {
		console.log("Validating Debit Payment");
	}

	makePayment() {
		console.log('Making Debit Payment');
	}
}

export default TSDebit;