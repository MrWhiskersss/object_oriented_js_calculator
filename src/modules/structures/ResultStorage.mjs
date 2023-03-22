class ProtectedStorage {
	constructor() {
		this.result = 0;
	}

	setResult(result) {
		this.result = result;
	}

	getResult() {
		return this.result;
	}
}

class ResultStorage {
	static #PROTECTED_STORAGE;

	constructor() {
	}

	static getInstance() {
		if(this.#PROTECTED_STORAGE == null)
			this.#PROTECTED_STORAGE = new ProtectedStorage();

		return this.#PROTECTED_STORAGE;
	}

	setResult(result) {
		this.#PROTECTED_STORAGE.setResult(result);
	}

	getResult() {
		return this.#PROTECTED_STORAGE.getResult();
	}
}

export default ResultStorage;
