import DivisionCommand from "../commands/DivisionCommand.mjs";

class DivisionHandler {
	constructor(nextHandler) {
		this.nextHandler = nextHandler;
		this.command = new DivisionCommand();
	}

	handle(command, parameters) {
		if(command === "divide")
			this.command.execute(parameters);
		else
			this.nextHandler.handle(command, parameters);
	}
}

export default DivisionHandler;
