import SubtractionCommand from "../commands/SubtractionCommand.mjs";

class SubtractionHandler {
	constructor(nextHandler) {
		this.nextHandler = nextHandler;
		this.command = new SubtractionCommand();
	}

	handle(command, parameters) {
		if(command === "subtract")
			this.command.execute(parameters);
		else
			this.nextHandler.handle(command, parameters);
	}
}

export default SubtractionHandler;
