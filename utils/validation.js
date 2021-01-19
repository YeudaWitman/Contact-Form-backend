const validation = (value, key) => {
	const letters = /^[A-Za-z]+$/;
	const lettersAndNumsAndSpaces = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
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
		case "city":
			return validateMatch(value, lettersAndNumsAndSpaces);
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

const requireObj = {
	city: {
		value: "tel aviv",
		status: "valid",
	},
	country: {
		value: "israel",
		status: "valid",
	},
	email: {
		value: "e@e.com",
		status: "valid",
	},
	firstName: {
		value: "Yeuda",
		status: "valid",
	},
	lastName: {
		value: "Witman",
		status: "valid",
	},
	number: {
		value: "3",
		status: "valid",
	},
	phone: {
		value: "05265549948",
		status: "valid",
	},
	rememberMe: {
		value: true,
		status: "valid",
	},
	street: {
		value: "ben gurion",
		status: "valid",
	},
	title: {
		value: "mr",
		status: "valid",
	},
};

const validateRequires = (obj) => {
	for (const key in requireObj) {
		console.log(obj);
		if (!obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
};

module.exports = { values: validation, requires: validateRequires };
