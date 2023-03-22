import BasicOperations from "../calculator/BasicOperations.mjs";
import ResultStorage from "../structures/ResultStorage.mjs";

class MultiplicationCommand {
	constructor() {
		this.resultStorage = ResultStorage.getInstance();
	}

	execute(parameters) {
		let values = parameters.split(" ");
		let result = BasicOperations.multiplyTwoValues(Number(values[0]), Number(values[1]));
		this.resultStorage.setResult(result);
	}
}

export default MultiplicationCommand;
