const validation = (value, key) => {
	const letters = /^[A-Za-z]+$/;
	const lettersAndNums = /^[A-Za-z0-9]*$/;
	const numbersOnly = /^[0-9]*$/;
	const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (value.length < 1) {
		return false;
	}
	switch (key) {
		case "rememberMe":
			return true;
		case "street":
		case "number":
			return validateMatch(value, lettersAndNums);
		case "email":
			return validateMatch(String(value).toLowerCase(), email);
		case "phone":
			return validateMatch(value, numbersOnly);
		default:
			return validateMatch(value, letters);
	}
};

const validateMatch = (value, reg) => {
	if (value.match(reg) === null) {
		return false;
	}
	return true;
};

module.exports = validation;
