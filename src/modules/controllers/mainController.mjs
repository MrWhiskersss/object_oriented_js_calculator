import AdditionHandler from "../handlers/AdditionHandler.mjs";
import SubtractionHandler from "../handlers/SubtractionHandler.mjs";
import MultiplicationHandler from "../handlers/MultiplicationHandler.mjs";
import DivisionHandler from "../handlers/DivisionHandler.mjs";
import FinalHandler from "../handlers/FinalHandler.mjs";
import ResultStorage from "../structures/ResultStorage.mjs";

class mainController {
	constructor() {
		this.value0 = document.getElementById("value-0");
		this.value1 = document.getElementById("value-1");

		this.operator = document.getElementById("operator");
		this.calculateButton = document.getElementById("calculate-button");
		
		this.resultText = document.getElementById("result");

		this.calculateButton.addEventListener("click", () => this.calculateResult());

		this.finalHandler = new FinalHandler();
		this.additionHandler = new AdditionHandler(this.finalHandler);
		this.subtractionHandler = new SubtractionHandler(this.additionHandler);
		this.multiplicationHandler = new MultiplicationHandler(this.subtractionHandler);
		this.divisionHandler = new DivisionHandler(this.multiplicationHandler);

		this.resultStorage = ResultStorage.getInstance();
	}

	calculateResult() {
		let parameters = this.value0.value + " " + this.value1.value;
		let command = this.operator.value;

		this.divisionHandler.handle(command, parameters);

		this.resultText.innerHTML = this.resultStorage.getResult();
	}
}

export default mainController;
