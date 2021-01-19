const validation = require("../utils/validation");

describe("rememberMe", () => {
	it("rememberMe should return true any way", () => {
		expect(validation.values(true, "rememberMe")).toBeTruthy();
		expect(validation.values(false, "rememberMe")).toBeTruthy();
	});
});

describe("street", () => {
	it("street should have at least 1 letters", () => {
		expect(validation.values("", "street")).toBeFalsy();
		expect(validation.values("L", "street")).toBeTruthy();
		expect(validation.values("Lombard Vale", "street")).toBeTruthy();
	});

	it("street should contain letters, numbers and spaces", () => {
		expect(validation.values("Leys Village", "street")).toBeTruthy();
		expect(validation.values("Little Horton Lane", "street")).toBeTruthy();
		expect(validation.values("Cottinglea45", "street")).toBeTruthy();
		expect(validation.values("Cottinglea.45", "street")).toBeFalsy();
		expect(validation.values("Holcombe-Ground", "street")).toBeFalsy();
	});
});

describe("number", () => {
	it("number should have at least 1 letters", () => {
		expect(validation.values("", "number")).toBeFalsy();
		expect(validation.values("5", "number")).toBeTruthy();
		expect(validation.values("52", "number")).toBeTruthy();
	});

	it("street should contain letters, numbers and spaces", () => {
		expect(validation.values("Leys5", "number")).toBeTruthy();
		expect(validation.values("23 W", "number")).toBeTruthy();
		expect(validation.values("37N", "number")).toBeTruthy();
		expect(validation.values(".45", "number")).toBeFalsy();
		expect(validation.values("7-9", "number")).toBeFalsy();
		expect(validation.values("6/7", "number")).toBeFalsy();
	});
});

describe("email", () => {
	it("email should be a legal email address", () => {
		expect(validation.values("", "email")).toBeFalsy();
		expect(validation.values("user$gmail.com", "email")).toBeFalsy();
		expect(validation.values("gmail.com", "email")).toBeFalsy();
		expect(validation.values("user@gmail.com", "email")).toBeTruthy();
		expect(validation.values("user@company.io", "email")).toBeTruthy();
		expect(validation.values("admin.user@company.net", "email")).toBeTruthy();
	});
});

describe("phone", () => {
	it("phone should contain numbers only, no hyphen", () => {
		expect(validation.values("", "phone")).toBeFalsy();
		expect(validation.values("052-1234567", "phone")).toBeFalsy();
		expect(validation.values("052-123-4567", "phone")).toBeFalsy();
		expect(validation.values("0529876512", "phone")).toBeTruthy();
	});
});
