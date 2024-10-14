const fs = require("fs");
const changeExt = require("../src/lib/change-extension");

describe("change-ext command", () => {
	test("should change the extension of .txt files to .md", () => {
		const promise = new Promise(() => changeExt("_mock/my-project", ".md"));

		promise.then(() => {
			expect(fs.existsSync("_mock/my-project/brand1.md")).toBe(true);
			expect(fs.existsSync("_mock/my-project/brand2.md")).toBe(true);
		});
	});

	test("should not change extension of non-matching files", () => {
		const promise = new Promise(() => changeExt("_mock/my-project", ".txt", ".md"))

		promise.then(() => expect(fs.existsSync("_mock/my-project/file1.md")).toBe(true))
	});
});
