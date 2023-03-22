import MultiplicationCommand from "../commands/MultiplicationCommand.mjs";

class MultiplicationHandler {
	constructor(nextHandler) {
		this.nextHandler = nextHandler;
		this.command = new MultiplicationCommand();
	}

	handle(command, parameters) {
		if(command === "multiply")
			this.command.execute(parameters);
		else
			this.nextHandler.handle(command, parameters);
	}
}

export default MultiplicationHandler;
