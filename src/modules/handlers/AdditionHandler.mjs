import AdditionCommand from "../commands/AdditionCommand.mjs";

class AdditionHandler {
	constructor(nextHandler) {
		this.nextHandler = nextHandler;
		this.command = new AdditionCommand();
	}

	handle(command, parameters) {
		if(command === "add")
			this.command.execute(parameters);
		else
			this.nextHandler.handle(command, parameters);
	}
}

export default AdditionHandler;
