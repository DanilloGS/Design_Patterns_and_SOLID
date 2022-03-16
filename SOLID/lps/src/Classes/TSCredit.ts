import TSBank from "./TSBank";

class TSCredit extends TSBank{
    
	validatePayment() {
		console.log("Validating Credit Payment");
	}

	makePayment() {
		console.log('Making Credit Payment');
	}
}

export default TSCredit;